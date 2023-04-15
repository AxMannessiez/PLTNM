import { useEffect, useState } from 'react';

import {
  Avatar,
  AvatarGroup,
  Box,
  Center,
  Container,
  Fade,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import PltnmButton from '../components/base/PltnmButton';
import { Game, Team } from '../database';
import { startsByVowel } from '../helpers';
import { storeGameId, storeIsExistingGame, storeTeamId } from '../localStorage';

function StartGame() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { gameId } = useParams();

  const [teamName, setTeamName] = useState('');
  const [teamPlayers, setTeamPlayers] = useState([]);
  const [playersNameText, setPlayersNameText] = useState('');

  useEffect(() => {
    Game.getGame(gameId).then(game => {
      if (!game) {
        navigate('/start/step-3');
      }
      Team.getTeam(game.team).then(team => {
        if (!team) {
          navigate('/start/step-3');
        }
        setTeamName(team.name);
        storeIsExistingGame(true);
        storeTeamId(team.id);
        storeGameId(game.id);

        team.getPlayers().then(players => {
          setTeamPlayers(players);
        });
      });
    });
  }, []);

  useEffect(() => {
    setPlayersNameText(
      t('startGame.PlayersAlreadyAdded', {
        names: teamPlayers.map(player => player.name),
        count: teamPlayers.length,
      })
    );
  }, [teamPlayers]);

  const displayBottomPart =
    !!teamName && teamPlayers.length > 0 && !!playersNameText;

  return (
    <Container maxW="3xl">
      <VStack textAlign="center" spacing={20} py={[20, 24]}>
        <Fade in={!!teamName} duration={0.2}>
          <Box>
            <Heading
              as="h1"
              fontSize={['2xl', '4xl']}
              lineHeight="1.1"
              mb={[2, 4]}
            >
              {t('startGame.Title', {
                teamName,
                context: startsByVowel(teamName) ? 'vowel' : null,
              })}
            </Heading>
            <Heading
              as="h3"
              fontSize={['xl', '2xl']}
              fontFamily="body"
              fontWeight="normal"
            >
              {t('startGame.Subtitle')}
            </Heading>
          </Box>
        </Fade>
        <Fade in={displayBottomPart} duration={0.2}>
          <Stack
            direction={['column', 'row']}
            align="center"
            size="md"
            spacing={4}
          >
            <AvatarGroup max={4} spacing={-4}>
              {teamPlayers.map(player => (
                <Avatar
                  key={uuidv4()}
                  name={player.name}
                  src={player.picture}
                  borderWidth="3px"
                  boxSizing="content-box"
                  fontWeight={600}
                  bg="pltnm.primary"
                />
              ))}
            </AvatarGroup>
            <Text fontSize="md" color="gray.700">
              {playersNameText}
            </Text>
          </Stack>
        </Fade>
        <Fade in={displayBottomPart} duration={0.2} delay={0.2}>
          <Center>
            <Link to="/start/">
              <PltnmButton rounded="full" px={6}>
                {t('global.GetStarted')}
              </PltnmButton>
            </Link>
          </Center>
        </Fade>
      </VStack>
    </Container>
  );
}

export default StartGame;
