import { useEffect, useState } from 'react';

import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  StackDivider,
} from '@chakra-ui/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import env from 'react-dotenv';
import {
  IoCheckmarkOutline,
  IoCopyOutline,
  IoShareOutline,
} from 'react-icons/io5';

import SavingPlaylistSpinner from './Share/SavingPlaylistSpinner';
import TeamNameForm from './Share/TeamNameForm';
import StartStepsHeader from './StartStepsHeader';
import Game from '../../database/Game';
import Playlist from '../../database/Playlist';
import Team from '../../database/Team';
import { getGameId, storeGameId } from '../../localStorage/gameId';
import { getTeamId, storeTeamId } from '../../localStorage/teamId';
import { getUserId } from '../../localStorage/userId';
import { getUserName } from '../../localStorage/userName';
import SpotifyApi from '../../spotifyApi/SpotifyApi';

const sideButtonStyle = {
  boxSize: 10,
  p: 0,
  boxSizing: 'content-box',
  borderLeft: '1px',
  borderColor: 'gray.200',
  borderRadius: '0 5px 5px 0',
  color: 'gray.500',
  _hover: { backgroundColor: 'gray.50' },
  _active: { backgroundColor: 'gray.200' },
};

// TODO Team name from local Storage

// Team and game creation in database
async function createTeamAndGame(setTeamName, setGameId) {
  const teamName = `${getUserName()}'s Team`;
  setTeamName(teamName);
  const teamId = getTeamId(); // Check if stored in LocalStorage, if not create one and store id
  if (!teamId) {
    const createdTeam = await Team.create(teamName);
    storeTeamId(createdTeam.id);

    createdTeam.addPlayer(getUserId());

    const game = await Game.create(createdTeam.id);
    storeGameId(game.id);
    setGameId(game.id);
  } else {
    setGameId(getGameId());
  }
}

export default function Share() {
  const [teamName, setTeamName] = useState(null);
  const [gameId, setGameId] = useState(null);
  const [savingPlaylist, setSavingPlaylist] = useState(true);
  const [shouldDisplayCheckIcon, setShouldDisplayCheckIcon] = useState(false);

  useEffect(() => {
    createTeamAndGame(setTeamName, setGameId).then(() => {
      // Save user playlist in database
      const playlist = new Playlist(
        getUserId(),
        SpotifyApi.getCurrentPlaylistDataJsonExport(),
        gameId
      );
      playlist.save().then(() => setSavingPlaylist(false));
    });
  }, []);

  // URL for game
  const gameUrl = `${env.REACT_APP_SITE_URL}/start/game/${gameId}`;
  const gameUrlQr = `https://api.qrserver.com/v1/create-qr-code/?data=${gameUrl}&size=400x400`;

  return savingPlaylist ? (
    <SavingPlaylistSpinner />
  ) : (
    <>
      <StartStepsHeader
        title="We saved your playlist!"
        subtitle="Now share the link with your friends!"
        description="They will be able to play with you by uploading their own playlists."
      />
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
            {navigator.share ? (
              <Button
                sx={sideButtonStyle}
                onClick={() => {
                  navigator
                    .share({
                      url: gameUrl,
                      title: 'PLTNM',
                      text: 'Play with me on PLTNM by uploading your playlist!',
                    })
                    .then(() => {
                      setShouldDisplayCheckIcon(true);
                      setTimeout(() => {
                        setShouldDisplayCheckIcon(false);
                      }, 500);
                    });
                }}
              >
                {shouldDisplayCheckIcon ? (
                  <IoCheckmarkOutline />
                ) : (
                  <IoShareOutline />
                )}
              </Button>
            ) : (
              <CopyToClipboard
                text={gameUrl}
                onCopy={() => {
                  setShouldDisplayCheckIcon(true);
                  setTimeout(() => {
                    setShouldDisplayCheckIcon(false);
                  }, 500);
                }}
              >
                <Button sx={sideButtonStyle}>
                  {shouldDisplayCheckIcon ? (
                    <IoCheckmarkOutline />
                  ) : (
                    <IoCopyOutline />
                  )}
                </Button>
              </CopyToClipboard>
            )}
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
