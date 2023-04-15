import {
  AspectRatio,
  Box,
  Center,
  Flex,
  Image,
  SlideFade,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import StartStepsHeader from './StartStepsHeader';
import PltnmButton from '../base/PltnmButton';
import { goSignIn } from '../../helpers';
import { SpotifyApi } from '../../spotifyApi';

// TODO Add animation
// TODO Check parameters / have token stored

export default function CheckSongs() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goSignInOnClick = () => goSignIn(navigate, '/signin', '/start/step-4');

  const lastYearPlaylistData = SpotifyApi.getCurrentPlaylistData();

  // Get 5 different albums present in the playlist
  const nbAlbums = 5;
  const samplePlaylistAlbums = SpotifyApi.getRandomAlbumsFromPlaylist(
    lastYearPlaylistData,
    nbAlbums
  );

  return (
    <>
      <StartStepsHeader
        title={t('startSteps.checkSongs.Title')}
        subtitle={t('startSteps.checkSongs.Subtitle')}
      />
      <Wrap justify="center" pt={5} px={2} spacing={5} maxW="xl">
        {samplePlaylistAlbums
          ? samplePlaylistAlbums.map((album, i) => (
              <WrapItem key={album.id}>
                <SlideFade in duration={0.5} delay={0.5 + i * 0.15}>
                  <AspectRatio
                    ratio={1}
                    w={['7em', '10em']}
                    title={`${album.name} - ${album.artists[0].name}`}
                    borderRadius="base"
                    border="1px #E0E0E0 solid"
                    boxShadow="md"
                    overflow="hidden"
                  >
                    {album.images && album.images[1] && album.images[1].url ? (
                      <Image src={album.images[1].url} alt={album.name} />
                    ) : (
                      <Center
                        bgGradient="linear(to-tl, #1F1F1F, #393939)"
                        w="100%"
                        h="100%"
                        p={2}
                      >
                        <Text fontSize="130%" color="white" align="center">
                          {album.name}
                        </Text>
                      </Center>
                    )}
                  </AspectRatio>
                </SlideFade>
              </WrapItem>
            ))
          : null}
      </Wrap>
      <Box pt={[8, 5]}>
        <Flex flexWrap="wrap" align="center" justify="center" gap={3}>
          <SlideFade in delay={0.8} duration={1.5} offsetY={0}>
            <Link to="/start/step-2">
              <PltnmButton variant="outline">
                {t('startSteps.checkSongs.SongsNotOk')}
              </PltnmButton>
            </Link>
          </SlideFade>
          <SlideFade in delay={1} duration={1.5} offsetY={0}>
            <PltnmButton onClick={goSignInOnClick}>
              {t('startSteps.checkSongs.SongsOk')}
            </PltnmButton>
          </SlideFade>
        </Flex>
      </Box>
    </>
  );
}
