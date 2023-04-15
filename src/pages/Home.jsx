import { Center, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import PltnmButton from '../components/base/PltnmButton';

function Home() {
  const { t } = useTranslation();

  return (
    <Container maxW="3xl">
      <VStack
        textAlign="center"
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          as="h1"
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight="1.1"
        >
          {t('home.title.FirstPart')}
          <Text as="span" color="pltnm.primary">
            {t('home.title.highlighted')}
          </Text>
        </Heading>
        <Heading
          as="h4"
          fontSize="lg"
          fontFamily="body"
          fontWeight="normal"
          color="gray.500"
        >
          {t('home.description.FirstLine')}
          <br />
          {t('home.description.SecondLine')}
        </Heading>
        <Center>
          <Link to="/start/">
            <PltnmButton rounded="full" px={6}>
              {t('global.GetStarted')}
            </PltnmButton>
          </Link>
        </Center>
      </VStack>
    </Container>
  );
}

export default Home;
