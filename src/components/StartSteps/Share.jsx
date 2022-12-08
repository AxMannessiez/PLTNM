import {SpotifyApi} from "../../spotifyApi/SpotifyApi";
import {getTeamId, storeTeamId} from "../../localStorage/teamId";
import {getUserId} from "../../localStorage/userId";
import {storeGameId} from "../../localStorage/gameId";
import {getUserName} from "../../localStorage/userName";
import {Team} from "../../database/Team";
import {Game} from "../../database/Game";
import {Playlist} from "../../database/Playlist";

import {Container, Center} from '@chakra-ui/react';
import {useState, useEffect} from "react";


// TODO Team name from local Storage

// Team and game creation in database
async function createTeamAndGame(setTeamName, setGameId) {
    const teamId = getTeamId();    // Check if stored in LocalStorage, if not create one and store id
    if (!teamId) {
        const teamName = getUserName() + "'s Team";
        setTeamName(teamName)
        const createdTeam = await Team.create(teamName);
        storeTeamId(createdTeam.id);

        createdTeam.addPlayer(getUserId());

        const game = await Game.create(createdTeam.id)
        storeGameId(game.id);
        setGameId(game.id);
    } else {
        const teamName = getUserName() + "'s Team";
        setTeamName(teamName)
    }
}

export function Share(){
    const [teamName, setTeamName] = useState(null);
    const [gameId, setGameId] = useState(null);
    const [savingPlaylist, setSavingPlaylist] = useState(true);

    useEffect(() => {
        createTeamAndGame(setTeamName, setGameId)
    }, []);


    // Save user playlist in database
    const playlist = new Playlist(getUserId(), SpotifyApi.getCurrentPlaylistDataJsonExport());
    playlist.save().then(() => setSavingPlaylist(false));


    return (
        <Container maxW={'3xl'} mt={20}>
            <Center>{savingPlaylist ? "Saving playlist..." : "Playlist saved!"}</Center>
            <Center>Team name : {teamName}</Center>
            <Center>Share the link with your friends to play!</Center>
            <Center>Game Id : {gameId}</Center>
        </Container>
    )
}