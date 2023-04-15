import { Center, Heading, Spinner, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function SavingPlaylistSpinner() {
  const { t } = useTranslation();

  return (
    <VStack justify="center">
      <Heading as="h2" fontSize="xl" mt={10}>
        {t('startSteps.share.SavingPlaylist')}
      </Heading>
      <Center pt={5}>
        <Spinner color="pltnm.primary" size="md" />
      </Center>
    </VStack>
  );
}
