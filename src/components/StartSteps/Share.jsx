//import {SpotifyApi} from "../../spotifyApi/SpotifyApi";
import {getTeamId, storeTeamId} from "../../localStorage/teamId";
import {getUserId} from "../../localStorage/userId";
import {storeGameId} from "../../localStorage/gameId";
import {Team} from "../../database/Team";
import {Game} from "../../database/Game";

import {Container, Center} from '@chakra-ui/react';



export function Share(){

    // Team and game creation in database
    const team = getTeamId();    // Check if stored in LocalStorage, if not create one and store id
    let game = null;
    if (!team) {
        Team.create().then(createdTeam => {
            storeTeamId(createdTeam.id);
            createdTeam.addPlayer(getUserId()).then(e => console.log(e));
            game = Game.create(createdTeam);
            storeGameId(game.id);
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