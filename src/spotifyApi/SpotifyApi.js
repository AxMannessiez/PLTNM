import {endpoints} from "./endpoints";
import getSamples from "../helpers/getSamples";

import axios from 'axios';
import _ from 'lodash';
import {storeCurrentPlaylistData, getCurrentPlaylistData} from "../localStorage/currentPlaylistData";


// TODO Create Album class for same structure across music services

class SpotifyApi {

    baseUrl = "https://api.spotify.com/v1";
    endpoints = endpoints.api;

    constructor(authToken= null) {
        this.authToken = authToken ? authToken.accessToken : null;
    }

    async getPlaylistTracks(id) {
        const res = await axios.get(
            `${this.baseUrl}${this.endpoints.playlists}/${id}/tracks?fields=items(track(album(id,images,name,artists),artists(id,name),external_ids,id,name,preview_url))`,
            {
                headers: {
                    'Authorization': 'Bearer ' + this.authToken,
                    'content-type': 'application/json',
                },
            }
        );
        return res.data;
    };

    static storeCurrentPlaylistData(currentPlaylistData){
        storeCurrentPlaylistData(JSON.stringify(currentPlaylistData));
    }

    static getCurrentPlaylistData(){
        return JSON.parse(getCurrentPlaylistData());
    }

    static getCurrentPlaylistDataCsvExport(){
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Index;Id;Name;Artists;Album;AlbumCoverSm;AlbumCoverMd;ISRC\n"
        let currentPlaylistData = this.getCurrentPlaylistData();
        for (let i = 0; i < currentPlaylistData.length; i++) {
            let {trackId, trackName, artists, albumName, albumCoverSm, albumCoverMd, trackISRC} = SpotifyApi.#getAndCheckTrackInfos(currentPlaylistData[i].track);
             csvContent += `${i};${trackId};${trackName};${artists};${albumName};${albumCoverSm};${albumCoverMd};${trackISRC}\n`;
        }
        return csvContent;
    }

    static #getAndCheckTrackInfos(track){
        // Check if properties exist else set empty string
        let trackId = track.id ?? '';
        let trackName = track.name ?? '';
        let albumName = track.album?.name ?? '';
        let albumCoverSm = track.album?.images[1]?.url ?? '';
        let albumCoverMd = track.album?.images[0]?.url ?? '';
        let trackISRC = track.external_ids?.isrc ?? '';

        // Regroup artists array into a comma/& separated string
        let artists = _.map(track.artists, 'name');         // Take only the artists names
        if (artists.length > 1) {
            const lastArtist = artists.pop();
            artists = artists.join(', ') + ' & ' + lastArtist;
        }

        // Return all variables
        return {trackId, trackName, artists, albumName, albumCoverSm, albumCoverMd, trackISRC};
    }

    static getRandomAlbumsFromPlaylist(playlist, n) {
        return getSamples(this.#getUniqueAlbumsFromPlaylist(playlist), n)
    }

    static #getUniqueAlbumsFromPlaylist(playlist) {
        let playlistAlbums = {};
        for (const track of playlist) {
            playlistAlbums[track.track.album.id] = track.track.album;
        }
        return playlistAlbums;
    }
}

export {SpotifyApi};