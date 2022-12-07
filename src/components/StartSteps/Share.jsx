//import {SpotifyApi} from "../../spotifyApi/SpotifyApi";
import {getTeamId, storeTeamId} from "../../localStorage/teamId";
import {Team} from "../../database/Team";

import {Container, Center} from '@chakra-ui/react';
import {getUserId} from "../../localStorage/userId";


export function Share(){

    const team = getTeamId();    // Check if stored in LocalStorage, if not create one and store id
    if (!team) {
        Team.create().then(t => {
            storeTeamId(t.id);
            t.addPlayer(getUserId()).then(e => console.log(e));
        });
    }

    /*function savePlaylistAsCsv() {
        const data = encodeURI(SpotifyApi.getCurrentPlaylistDataCsvExport());
        const link = document.createElement("a");
        link.setAttribute("href", data);
        link.setAttribute("download", "My Spotify Top Songs.csv");
        link.click();
    }*/

    return (
        <Container maxW={'3xl'} mt={20}>
            <Center>Share the link with your friends to play!</Center>
        </Container>
    )
}