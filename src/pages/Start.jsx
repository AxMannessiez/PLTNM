import { Box, VStack } from '@chakra-ui/react';
import { useSteps } from 'chakra-ui-steps';
import { Navigate, useParams } from 'react-router-dom';

import ProgressSteps from '../components/ProgressSteps';
import {
  CheckSongs,
  ChoosePlaylist,
  End,
  MusicServiceLogin,
  Share,
} from '../components/StartSteps';
import { getGameId } from '../localStorage';

import '../styles/animation.css';

// TODO Page Name

const existingGameId = getGameId();
const isNewGame = !existingGameId;

const steps = {
  labels: isNewGame
    ? ['Login', 'Selection', 'Check', 'Share']
    : ['Login', 'Selection', 'Check'],
  components: isNewGame
    ? [<MusicServiceLogin />, <ChoosePlaylist />, <CheckSongs />, <Share />]
    : [<MusicServiceLogin />, <ChoosePlaylist />, <CheckSongs />, <End />],
};

function Start() {
  let { activeStep } = useSteps({
    initialStep: 0,
  });

  // Step param in route
  const { stepIdx } = useParams();
  if (!(stepIdx > 0 && stepIdx < 5)) {
    return <Navigate to="/start/step-1" replace />;
  }
  activeStep = +stepIdx - 1;

  return (
    <VStack as="main" w="100%" pb={20}>
      <Box pt={[8, 10]} w="100%" maxW={580}>
        <ProgressSteps steps={steps.labels} activeStep={activeStep} />
      </Box>
      <VStack pt={[6, 10]} px={[6, 10]}>
        {activeStep >= 4 ? '' : steps.components[activeStep]}
      </VStack>
    </VStack>
  );
}

export default Start;
