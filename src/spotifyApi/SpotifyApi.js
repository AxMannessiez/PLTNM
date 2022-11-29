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
            `${this.baseUrl}${this.endpoints.playlists}/${id}/tracks?fields=items(track(album(id,images,name),artists(id,name),external_ids,id,name,preview_url))`,
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
}

export {SpotifyApi};