import {
  Flex,
  Stack,
  StackDivider,
  Heading,
  Text,
  Box,
  Input,
  Button,
  Center,
  Image,
} from '@chakra-ui/react';
import { CopyIcon, CheckIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import env from 'react-dotenv';

import SpotifyApi from '../../spotifyApi/SpotifyApi';
import { getTeamId, storeTeamId } from '../../localStorage/teamId';
import { getUserId } from '../../localStorage/userId';
import { getGameId, storeGameId } from '../../localStorage/gameId';
import { getUserName } from '../../localStorage/userName';
import Team from '../../database/Team';
import Game from '../../database/Game';
import Playlist from '../../database/Playlist';
import SavingPlaylistSpinner from './Share/SavingPlaylistSpinner';
import TeamNameForm from './Share/TeamNameForm';

// TODO Team name from local Storage

// Team and game creation in database
async function createTeamAndGame(setTeamName, setGameId) {
  const teamId = getTeamId(); // Check if stored in LocalStorage, if not create one and store id
  if (!teamId) {
    const teamName = `${getUserName()}'s Team`;
    setTeamName(teamName);
    const createdTeam = await Team.create(teamName);
    storeTeamId(createdTeam.id);

    createdTeam.addPlayer(getUserId());

    const game = await Game.create(createdTeam.id);
    storeGameId(game.id);
    setGameId(game.id);
  } else {
    const teamName = `${getUserName()}'s Team`;
    setTeamName(teamName);
    setGameId(getGameId());
  }
}

export default function Share() {
  const [teamName, setTeamName] = useState(null);
  const [gameId, setGameId] = useState(null);
  const [savingPlaylist, setSavingPlaylist] = useState(true);
  const [shouldDisplayCopyCheckIcon, setShouldDisplayCopyCheckIcon] =
    useState(false);

  useEffect(() => {
    createTeamAndGame(setTeamName, setGameId);
  }, []);

  // Save user playlist in database
  const playlist = new Playlist(
    getUserId(),
    SpotifyApi.getCurrentPlaylistDataJsonExport()
  );
  playlist.save().then(() => setSavingPlaylist(false));

  // URL for game
  const gameUrl = `${env.REACT_APP_SITE_URL}/start/${gameId}`;
  const gameUrlQr = `https://api.qrserver.com/v1/create-qr-code/?data=${gameUrl}&size=400x400`;

  return savingPlaylist ? (
    <SavingPlaylistSpinner />
  ) : (
    <>
      <Box as="header" textAlign="center">
        <Heading as="h2" fontSize="2xl" fontWeight="bold">
          We saved your playlist!
        </Heading>
        <Heading as="h3" fontSize="xl" fontFamily="body" fontWeight="normal">
          Now share the link with your friends!
        </Heading>
        <Text lineHeight="shorter" mt={2}>
          They will be able to play with you by uploading their own playlists.
        </Text>
      </Box>
      <Stack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={6}
        pt={{ base: 2, sm: 6 }}
        w="100%"
        align="start"
        direction={['column', 'row']}
      >
        <Flex direction="column" py={6} w="100%">
          <Heading as="h5" fontSize="lg" mb={3} align="center">
            Check your team name
          </Heading>
          <TeamNameForm initialName={teamName} />
        </Flex>
        <Flex direction="column" align="center" py={6} w="100%">
          <Heading as="h5" fontSize="lg" mb={3} align="center">
            Share the link
          </Heading>
          <Flex
            w="100%"
            border="1px"
            borderColor="gray.200"
            borderRadius="6px"
            p={0}
            mb={3}
          >
            <Input
              isReadOnly
              size="md"
              border="none"
              textColor="black"
              value={gameUrl}
            />
            <CopyToClipboard
              text={gameUrl}
              onCopy={() => {
                setShouldDisplayCopyCheckIcon(true);
                setTimeout(() => {
                  setShouldDisplayCopyCheckIcon(false);
                }, 500);
              }}
            >
              <Button
                boxSize={10}
                p={0}
                borderLeft="1px"
                borderColor="gray.200"
                borderRadius="0 5px 5px 0"
                _hover={{ backgroundColor: 'gray.50' }}
                _active={{ backgroundColor: 'gray.200' }}
              >
                {shouldDisplayCopyCheckIcon ? (
                  <CheckIcon color="gray.500" />
                ) : (
                  <CopyIcon color="gray.500" />
                )}
              </Button>
            </CopyToClipboard>
          </Flex>

          <Center border="1px" borderColor="gray.200" borderRadius="md" p={2}>
            <Image
              src={gameUrlQr}
              alt="Game link QR Code"
              load="lazy"
              htmlWidth="150em"
              align="center"
            />
          </Center>
        </Flex>
      </Stack>
    </>
  );
}
