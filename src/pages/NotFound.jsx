import { Box, Heading, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import PltnmButton from '../components/base/PltnmButton';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <Box textAlign="center" py={40} px={10}>
      <Heading as="h1" size="2xl" color="pltnm.primary">
        404
      </Heading>
      <Heading
        as="h3"
        fontSize="lg"
        fontFamily="body"
        fontWeight="normal"
        mt={6}
        mb={1}
      >
        {t('errors.pageNotFound.Title')}
      </Heading>
      <Text color="gray.500" mb={6}>
        {t('errors.pageNotFound.Subtitle')}
      </Text>

      <PltnmButton rounded="full" px={6}>
        <Link to="/">{t('errors.GoToHome')}</Link>
      </PltnmButton>
    </Box>
  );
}
