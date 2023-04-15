import { Center, SimpleGrid } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import {
  AmazonMusicLogoCard,
  AppleMusicLogoCard,
  DeezerLogoCard,
  NapsterLogoCard,
  PandoraLogoCard,
  SoundcloudLogoCard,
  SpotifyLogoCard,
  TidalLogoCard,
  YoutubeMusicLogoCard,
} from './MusicServicesLogoCards';
import StartStepsHeader from './StartStepsHeader';

const cardMaxW = '200px';
const cardNameMargin = { base: 0, sm: 1 };

// TODO Add loading indicators to every page
// TODO Check .env keys hidden
// TODO Use Chakra LinkOverlay
// TODO Add toast message if auth failed

export default function MusicServiceLogin() {
  const { t } = useTranslation();

  return (
    <>
      <StartStepsHeader
        title={t('startSteps.login.Title')}
        subtitle={t('startSteps.login.Subtitle')}
        description={t('startSteps.login.Description')}
      />
      <Center pt={{ base: 6, sm: 10 }}>
        <SimpleGrid
          columns={3}
          spacingX={{ base: 4, sm: 7 }}
          spacingY={{ base: 2, sm: 4 }}
          maxW={{ base: '30vh', sm: '35em' }}
        >
          <SpotifyLogoCard maxW={cardMaxW} nameMargin={cardNameMargin} />
          <AppleMusicLogoCard
            maxW={cardMaxW}
            nameMargin={cardNameMargin}
            link="https://music.apple.com/subscribe"
          />
          <DeezerLogoCard
            maxW={cardMaxW}
            nameMargin={cardNameMargin}
            link="https://www.deezer.com/login"
          />
          <YoutubeMusicLogoCard maxW={cardMaxW} nameMargin={cardNameMargin} />
          <TidalLogoCard maxW={cardMaxW} nameMargin={cardNameMargin} />
          <PandoraLogoCard maxW={cardMaxW} nameMargin={cardNameMargin} />
          <SoundcloudLogoCard maxW={cardMaxW} nameMargin={cardNameMargin} />
          <AmazonMusicLogoCard maxW={cardMaxW} nameMargin={cardNameMargin} />
          <NapsterLogoCard maxW={cardMaxW} nameMargin={cardNameMargin} />
        </SimpleGrid>
      </Center>
    </>
  );
}
