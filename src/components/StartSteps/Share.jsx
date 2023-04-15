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
import { useTranslation } from 'react-i18next';
import {
  IoCheckmarkOutline,
  IoCopyOutline,
  IoShareOutline,
} from 'react-icons/io5';

import SavingPlaylistSpinner from './Share/SavingPlaylistSpinner';
import TeamNameForm from './Share/TeamNameForm';
import StartStepsHeader from './StartStepsHeader';
import { Game, Playlist, Team } from '../../database';
import { startsByVowel } from '../../helpers';
import {
  getGameId,
  getTeamId,
  getUserId,
  getUserName,
  storeGameId,
  storeTeamId,
} from '../../localStorage';
import { SpotifyApi } from '../../spotifyApi';

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

const getLocalizedDefaultTeamName = (t, creatorName) =>
  t('global.DefaultTeamName', {
    creatorName,
    context: startsByVowel(creatorName) ? 'vowel' : null,
  });

// Team and game creation in database
const createTeamAndGame = async (setTeamName, setGameId, t) => {
  const teamName = getLocalizedDefaultTeamName(t, getUserName());
  setTeamName(teamName);
  const teamId = getTeamId(); // Check if stored in LocalStorage, if not create one and store id
  if (!teamId) {
    const createdTeam = await Team.create(teamName);
    storeTeamId(createdTeam.id);

    await createdTeam.addPlayer(getUserId());

    const game = await Game.create(createdTeam.id);
    storeGameId(game.id);
    setGameId(game.id);
  }
  const gameId = getGameId();
  setGameId(gameId);
  return gameId;
};

// TODO Team name from local Storage
// TODO QR with fixed layout + spinner

export default function Share() {
  const { t } = useTranslation();

  const [teamName, setTeamName] = useState(null);
  const [gameId, setGameId] = useState(null);
  const [savingPlaylist, setSavingPlaylist] = useState(true);
  const [shouldDisplayCheckIcon, setShouldDisplayCheckIcon] = useState(false);

  useEffect(() => {
    createTeamAndGame(setTeamName, setGameId, t).then(returnGameId => {
      // Save user playlist in database
      const playlist = new Playlist(
        getUserId(),
        SpotifyApi.getCurrentPlaylistDataJsonExport(),
        returnGameId
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
        title={t('startSteps.share.Title')}
        subtitle={t('startSteps.share.Subtitle')}
        description={t('startSteps.share.Description')}
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
            {t('startSteps.share.CheckTeamName')}
          </Heading>
          <TeamNameForm initialName={teamName} />
        </Flex>
        <Flex direction="column" align="center" py={6} w="100%">
          <Heading as="h5" fontSize="lg" mb={3} align="center">
            {t('startSteps.share.ShareLink')}
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
                      text: t('startSteps.share.ShareMessage'),
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
