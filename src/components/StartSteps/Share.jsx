import {SpotifyApi} from "../../spotifyApi/SpotifyApi";
import {getTeamId, storeTeamId} from "../../localStorage/teamId";
import {getUserId} from "../../localStorage/userId";
import {getGameId, storeGameId} from "../../localStorage/gameId";
import {getUserName} from "../../localStorage/userName";
import {Team} from "../../database/Team";
import {Game} from "../../database/Game";
import {Playlist} from "../../database/Playlist";
import {SavingPlaylistSpinner} from "./Share/SavingPlaylistSpinner";
import {TeamNameForm} from "./Share/TeamNameForm";

import {Stack, VStack, HStack, StackDivider, Heading, Text, Box, Input, Button} from "@chakra-ui/react";
import {useState, useEffect} from "react";
import env from 'react-dotenv';


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
        setTeamName(teamName);
        setGameId(getGameId());
    }
}

export function Share() {
    const [teamName, setTeamName] = useState(null);
    const [gameId, setGameId] = useState(null);
    const [savingPlaylist, setSavingPlaylist] = useState(true);

    useEffect(() => {
        createTeamAndGame(setTeamName, setGameId)
    }, []);


    // Save user playlist in database
    const playlist = new Playlist(getUserId(), SpotifyApi.getCurrentPlaylistDataJsonExport());
    playlist.save().then(() => setSavingPlaylist(false));

    // URL for game
    let gameUrl = env.REACT_APP_SITE_URL + '/start/' + gameId;

    return (
        <>{
            (savingPlaylist) ?
                <SavingPlaylistSpinner/>
                :
                <>

                    <Box as='header' textAlign='center'>
                        <Heading as='h2' fontSize='2xl' fontWeight='bold'>We saved your playlist!</Heading>
                        <Heading as='h3' fontSize='xl' fontFamily='body' fontWeight='normal'>Now share the link with your friends!</Heading>
                        <Text lineHeight='shorter' mt={2}>They will be able to play with you by uploading their own playlists.</Text>
                    </Box>
                    <Stack divider={<StackDivider borderColor='gray.200'/>}
                           spacing={6} pt={{base: 2, sm: 6}}  w='100%' align='start'
                           direction={['column', 'row']}>
                        <VStack flex={1} py={6} w='100%'>
                            <Heading as='h5' fontSize='lg' mb={3} align='center'>Check your team name</Heading>
                            <TeamNameForm initialName={teamName}/>
                        </VStack>
                        <VStack flex={1} py={6} w='100%'>
                            <Heading as='h5' fontSize='lg' mb={3} align='center'>Share the link</Heading>
                            <Button data-clipboard-text={gameUrl} border='1px' borderColor='gray.200' borderRadius='md' p={0}>
                                <HStack w='100%'>
                                    <Input isReadOnly size={'md'} border='none' textColor='black' value={gameUrl} />
                                </HStack>
                            </Button>
                        </VStack>
                    </Stack>
                </>
        }</>
    );

}