import axios from 'axios';

import endpoints from './endpoints';
import { displayNames, getSamples } from '../helpers';
import {
  getCurrentPlaylistData,
  storeCurrentPlaylistData,
} from '../localStorage';

// TODO Create Album class for same structure across music services

export default class SpotifyApi {
  baseUrl = 'https://api.spotify.com/v1';

  endpoints = endpoints.api;

  constructor(authToken = null) {
    this.authToken = authToken ? authToken.accessToken : null;
  }

  async getPlaylistTracks(id) {
    const res = await axios.get(
      `${this.baseUrl}${this.endpoints.playlists}/${id}/tracks?fields=items(track(album(id,images,name,artists),artists(id,name),external_ids,id,name,preview_url))`,
      {
        headers: {
          Authorization: `Bearer ${this.authToken}`,
          'content-type': 'application/json',
        },
        timeout: 2000,
      }
    );
    return res.data;
  }

  static storeCurrentPlaylistData(currentPlaylistData) {
    storeCurrentPlaylistData(JSON.stringify(currentPlaylistData));
  }

  static getCurrentPlaylistData() {
    return JSON.parse(getCurrentPlaylistData());
  }

  static getCurrentPlaylistDataCsvExport() {
    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent +=
      'Index;Id;Name;Artists;Album;AlbumCoverSm;AlbumCoverMd;ISRC\n';
    const currentPlaylistData = this.getCurrentPlaylistData();
    for (let i = 0; i < currentPlaylistData.length; i++) {
      const {
        trackId,
        trackName,
        artists,
        albumName,
        albumCoverSm,
        albumCoverMd,
        trackISRC,
      } = SpotifyApi.#getAndCheckTrackInfos(currentPlaylistData[i].track);
      csvContent += `${i};${trackId};${trackName};${artists};${albumName};${albumCoverSm};${albumCoverMd};${trackISRC}\n`;
    }
    return csvContent;
  }

  static getCurrentPlaylistDataJsonExport() {
    const currentPlaylistData = this.getCurrentPlaylistData();
    return currentPlaylistData.map((track, idx) => {
      const {
        trackId,
        trackName,
        artists,
        albumName,
        albumCoverSm,
        albumCoverMd,
        trackISRC,
      } = SpotifyApi.#getAndCheckTrackInfos(track.track);
      return {
        idx,
        id: trackId,
        name: trackName,
        artists,
        alb: albumName,
        albCovSm: albumCoverSm,
        albCovMd: albumCoverMd,
        ISRC: trackISRC,
      };
    });
  }

  static #getAndCheckTrackInfos(track) {
    // Check if properties exist else set empty string
    const trackId = track.id ?? '';
    const trackName = track.name ?? '';
    const albumName = track.album?.name ?? '';
    const albumCoverSm = track.album?.images[1]?.url ?? '';
    const albumCoverMd = track.album?.images[0]?.url ?? '';
    const trackISRC = track.external_ids?.isrc ?? '';

    // Take only the artists names, and convert the
    // array into a comma/& separated string
    const artists = displayNames(track.artists.map(artist => artist.name));

    // Return all variables
    return {
      trackId,
      trackName,
      artists,
      albumName,
      albumCoverSm,
      albumCoverMd,
      trackISRC,
    };
  }

  static getRandomAlbumsFromPlaylist(playlist, n) {
    return getSamples(this.#getUniqueAlbumsFromPlaylist(playlist), n);
  }

  static #getUniqueAlbumsFromPlaylist(playlist) {
    const playlistAlbums = {};
    playlist.forEach(track => {
      playlistAlbums[track.track.album.id] = track.track.album;
    });
    return playlistAlbums;
  }
}
