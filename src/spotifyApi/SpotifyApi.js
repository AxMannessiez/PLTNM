import {endpoints} from "./endpoints";

import axios from 'axios';


// TODO Check useQuery

class SpotifyApi {

    constructor(authToken= null) {
        this.baseUrl = "https://api.spotify.com/v1";
        this.endpoints = endpoints.api;
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

    storeCurrentPlaylistData(currentPlaylistData){
        localStorage.setItem('currentPlaylistData', JSON.stringify(currentPlaylistData));
    }

    getCurrentPlaylistData(){
        return JSON.parse(localStorage.getItem('currentPlaylistData'));
    }

    getCurrentPlaylistDataCsvExport(){
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
        let trackId = track.id ? track.id : '';
        let trackName = track.name ? track.name : '';
        let artists = track.artists[0].name; //TODO Change
        let albumName = track.album && track.album.name ? track.album.name : '';
        let albumCoverSm = track.album && track.album.images && track.album.images[1] && track.album.images[1].url ? track.album.images[1].url : '';
        let albumCoverMd = track.album && track.album.images && track.album.images[0] && track.album.images[0].url ? track.album.images[0].url : '';
        let trackISRC = track.external_ids && track.external_ids.isrc ? track.external_ids.isrc : '';
        return {trackId, trackName, artists, albumName, albumCoverSm, albumCoverMd, trackISRC};
    }
}

export {SpotifyApi};