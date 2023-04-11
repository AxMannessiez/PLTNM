import { Heading, VStack } from '@chakra-ui/react';
import { Auth } from '@supabase/auth-ui-react';
import { Navigate } from 'react-router-dom';

import { AskName, AuthChoice } from '../components/SignIn';
import { getRedirectAfterSignIn, getUserName } from '../localStorage';

// TODO Check if already signed in, the if we have his name (storage + database)
// TODO Change error color to pltnm
// TODO Recode it without the Supabase UI (to get Chakra components)
// TODO Put Spotify last if user chose other app for playlist

export default function SignIn() {
  const { user } = Auth.useUser();

  return (
    <VStack h="100vh" justify="center">
      <Heading as="h1" fontSize="2xl" fontWeight="700">
        Sign In
      </Heading>
      {(() => {
        if (user && user.app_metadata && user.app_metadata.provider) {
          return getUserName() ? (
            <Navigate to={getRedirectAfterSignIn()} />
          ) : (
            <AskName user={user} />
          );
        }
        return <AuthChoice />;
      })()}
    </VStack>
  );
}
