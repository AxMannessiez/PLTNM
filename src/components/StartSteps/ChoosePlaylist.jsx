import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/card';
import { Select } from 'chakra-react-select';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import StartStepsHeader from './StartStepsHeader';
import PltnmButton from '../base/PltnmButton';
import { SpotifyAccountApi, SpotifyApi } from '../../spotifyApi';

const yearOptions = [
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' },
  { value: '2019', label: '2019' },
  { value: '2018', label: '2018' },
];

const playlistOptions = [
  { value: 'id1', label: 'Playlist 1' },
  { value: 'id2', label: 'Playlist 2' },
  { value: 'id3', label: 'Playlist 3' },
];

// TODO Check parameters / have token stored
// TODO Fetch possible years / playlists for second card
// TODO Implement search for third card

export default function ChoosePlaylist() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  /*
    if (location.state &&location.state.error) {
        return <Navigate to={"/start/step-1"} state={{error: location.state.error}}/>;
    }
    if (!(SpotifyAccountApi.getToken().access_token)) {
        return <Navigate to={"/start/step-1"}/>;
    }
    */
  const spotifyToken = SpotifyAccountApi.getToken();

  // Most recent year playlist
  const spotifyApi = new SpotifyApi(spotifyToken);
  // const spotify2021PlaylistId = "37i9dQZF1EUMDoJuT8yJsl";
  const spotify2022PlaylistId = '37i9dQZF1F0sijgNaJdgit';
  const spotifyMostRecentYear = '2022';
  const {
    data: mostRecentYearPlaylistData,
    status: mostRecentYearPlaylistStatus,
    isLoading: lstYrPlstLoading,
  } = useQuery('lastYearPlaylist', () =>
    spotifyApi.getPlaylistTracks(spotify2022PlaylistId)
  );

  // Store the playlist data and move to next step
  const saveMostRecentYearPlaylistAndStep3 = () => {
    if (mostRecentYearPlaylistStatus === 'success') {
      SpotifyApi.storeCurrentPlaylistData(mostRecentYearPlaylistData.items);
      navigate('/start/step-3');
    }
  };

  return (
    <>
      <StartStepsHeader
        title={t('startSteps.selection.Title')}
        subtitle={t('startSteps.selection.Subtitle')}
      />
      <SimpleGrid
        pt={{ base: 4, sm: 6 }}
        spacing={6}
        columns={{ base: 1, md: 3 }}
        maxW="4xl"
        gridAutoRows={{ base: null, md: '1fr' }}
      >
        <Card
          align="stretch"
          justify="space-between"
          textAlign="center"
          borderRadius={{ base: 'xl', md: 'lg' }}
          p={5}
          border="1px"
          borderColor="gray.200"
        >
          <CardHeader>
            <Heading as="h4" fontSize="xl">
              {t('startSteps.selection.MostRecentYear', {
                year: spotifyMostRecentYear,
              })}
            </Heading>
          </CardHeader>
          <CardFooter mt={{ base: 14, md: null }}>
            <PltnmButton
              minW="50%"
              m="auto"
              isLoading={lstYrPlstLoading}
              onClick={saveMostRecentYearPlaylistAndStep3}
            >
              {(() => {
                if (lstYrPlstLoading) {
                  return t('global.Loading');
                }
                return mostRecentYearPlaylistStatus === 'error'
                  ? t('global.Error')
                  : t('global.Go');
              })()}
            </PltnmButton>
          </CardFooter>
        </Card>
        <Card
          align="stretch"
          justify="space-between"
          textAlign="center"
          borderRadius="lg"
          p={5}
          border="1px"
          borderColor="gray.200"
        >
          <CardHeader>
            <Heading as="h4" fontSize="xl">
              {t('startSteps.selection.PreviousYears')}
            </Heading>
          </CardHeader>
          <CardBody my={[5, 8]}>
            <Box w="50%" m="auto">
              <Select
                size="md"
                placeholder={t('global.Year')}
                options={yearOptions}
                useBasicStyles
                focusBorderColor="pltnm.primary"
                selectedOptionColor="pltnm.primaryValues"
              />
            </Box>
          </CardBody>
          <CardFooter>
            <PltnmButton minW="50%" m="auto">
              {t('global.Go')}
            </PltnmButton>
          </CardFooter>
        </Card>
        <Card
          align="stretch"
          justify="space-between"
          textAlign="center"
          borderRadius="lg"
          p={5}
          border="1px"
          borderColor="gray.200"
        >
          <CardHeader>
            <Heading as="h4" fontSize="xl">
              {t('startSteps.selection.PersonalPlaylist')}
            </Heading>
          </CardHeader>
          <CardBody my={[5, 8]}>
            <Select
              size="md"
              placeholder={t('global.Playlist')}
              options={playlistOptions}
              useBasicStyles
              focusBorderColor="pltnm.primary"
              selectedOptionColor="pltnm.primaryValues"
            />
          </CardBody>
          <CardFooter>
            <PltnmButton minW="50%" m="auto">
              {t('global.Go')}
            </PltnmButton>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  );
}
