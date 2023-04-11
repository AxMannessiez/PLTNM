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
import { Link, useNavigate, useParams } from 'react-router-dom';

import PltnmButton from '../components/base/PltnmButton';
import { Game, Team } from '../database';
import displayNames from '../helpers/displayNames';
import { storeGameId, storeTeamId } from '../localStorage';

function StartGame() {
  const [teamName, setTeamName] = useState('');
  const [teamPlayers, setTeamPlayers] = useState([]);
  const [playersNameText, setPlayersNameText] = useState('');
  const { gameId } = useParams();

  const navigate = useNavigate();

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
        storeTeamId(team.id);
        storeGameId(game.id);

        team.getPlayers().then(players => {
          setTeamPlayers(players);
        });
      });
    });
  }, []);

  useEffect(() => {
    const names = displayNames(teamPlayers.map(player => player.name));
    if (teamPlayers.length > 1) {
      setPlayersNameText(`${names} have already added theirs.`);
    } else if (names) {
      setPlayersNameText(`Only ${names} has added his for now.`);
    }
  }, [teamPlayers]);

  const displayBottomPart = !!teamPlayers && !!playersNameText;

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
              Welcome to {teamName}! 👋
            </Heading>
            <Heading
              as="h3"
              fontSize={['xl', '2xl']}
              fontFamily="body"
              fontWeight="normal"
            >
              Ready to add your songs?
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
                Get Started
              </PltnmButton>
            </Link>
          </Center>
        </Fade>
      </VStack>
    </Container>
  );
}

export default StartGame;
