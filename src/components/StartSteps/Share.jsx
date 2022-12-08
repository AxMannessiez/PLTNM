import {SpotifyApi} from "../../spotifyApi/SpotifyApi";
import {getTeamId, storeTeamId} from "../../localStorage/teamId";
import {getUserId} from "../../localStorage/userId";
import {storeGameId} from "../../localStorage/gameId";
import {getUserName} from "../../localStorage/userName";
import {Team} from "../../database/Team";
import {Game} from "../../database/Game";
import {Playlist} from "../../database/Playlist";

import {Container, Center} from '@chakra-ui/react';
import {useState} from "react";


// TODO Team name from local Storage

export function Share(){
    const [savingPlaylist, setSavingPlaylist] = useState(true);

    // Team and game creation in database
    const teamId = getTeamId();    // Check if stored in LocalStorage, if not create one and store id
    let teamName;
    let game = null;
    if (!teamId) {
        teamName = getUserName() + "'s Team";
        Team.create(teamName).then(createdTeam => {
            storeTeamId(createdTeam.id);
            createdTeam.addPlayer(getUserId()).then(e => console.log(e));
            game = Game.create(createdTeam);
            storeGameId(game.id);
        });
    } else {
        teamName = getUserName() + "'s Team";
    }

    // Save user playlist in database
    const playlist = new Playlist(getUserId(), SpotifyApi.getCurrentPlaylistDataJsonExport());
    playlist.save().then(() => setSavingPlaylist(false));


    return (
        <Container maxW={'3xl'} mt={20}>
            <Center>{savingPlaylist ? "Saving playlist..." : "Playlist saved!"}</Center>
            <Center>Share the link with your friends to play!</Center>
        </Container>
    )
}