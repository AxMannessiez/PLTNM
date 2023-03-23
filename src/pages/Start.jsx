import { VStack, Box } from '@chakra-ui/react';
import { useSteps } from 'chakra-ui-steps';
import { useParams, Navigate } from 'react-router-dom';

import ProgressSteps from '../components/ProgressSteps';
import '../styles/animation.css';
import {
  MusicServiceLogin,
  ChoosePlaylist,
  CheckSongs,
  Share,
} from '../components/StartSteps';

// TODO Page Name

const steps = {
  labels: ['Login', 'Selection', 'Check', 'Share'],
  components: [
    <MusicServiceLogin />,
    <ChoosePlaylist />,
    <CheckSongs />,
    <Share />,
  ],
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
      <Box pt={{ base: 8, sm: 10 }} px={10} w="100%" maxW={580}>
        <ProgressSteps steps={steps.labels} activeStep={activeStep} />
      </Box>
      <VStack pt={{ base: 6, sm: 10 }} px={10}>
        {activeStep >= steps.labels.length ? '' : steps.components[activeStep]}
      </VStack>
    </VStack>
  );
}

export default Start;
