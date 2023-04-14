import { useEffect, useState } from 'react';

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
import { getIsExistingGame } from '../localStorage';

import '../styles/animation.css';

// TODO Page Name

function Start() {
  const [labels, setLabels] = useState([
    'Login',
    'Selection',
    'Check',
    'Share',
  ]);
  const [components, setComponents] = useState([
    <MusicServiceLogin />,
    <ChoosePlaylist />,
    <CheckSongs />,
    <Share />,
  ]);
  useEffect(() => {
    if (getIsExistingGame()) {
      setLabels(['Login', 'Selection', 'Check']);
      setComponents([
        <MusicServiceLogin />,
        <ChoosePlaylist />,
        <CheckSongs />,
        <End />,
      ]);
    }
  }, []);

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
        <ProgressSteps steps={labels} activeStep={activeStep} />
      </Box>
      <VStack pt={[6, 10]} px={[6, 10]}>
        {activeStep >= 4 ? '' : components[activeStep]}
      </VStack>
    </VStack>
  );
}

export default Start;
