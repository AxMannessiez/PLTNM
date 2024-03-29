import { useCallback, useEffect, useState } from 'react';

import { Box, Button, HStack, Spacer, Text } from '@chakra-ui/react';
import { Auth } from '@supabase/auth-ui-react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import PltnmLogo from './icons/PltnmLogo';
import { goSignIn, signOut } from '../helpers';
import theme from '../theme';

const excludedPages = ['/signin'];

export default function AppHeader() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user } = Auth.useUser();

  const [shouldShowHeader, setShouldShowHeader] = useState(true);

  useEffect(() => {
    setShouldShowHeader(!excludedPages.includes(pathname));
  }, [pathname]);

  const signOutOnClick = useCallback(() => signOut(navigate), [navigate]);
  const goSignInOnClick = useCallback(
    () => goSignIn(navigate, '/signin', pathname),
    [navigate, pathname]
  );

  if (!shouldShowHeader) {
    return null;
  }

  return (
    <HStack
      as="header"
      bg="pltnm.background"
      px="1.5em"
      h={16}
      alignItems="center"
    >
      <Box>
        <Link to="/">
          <PltnmLogo h="1.5em" w="" />
        </Link>
      </Box>
      <Spacer />
      {user ? (
        <Button
          block="true"
          bg="transparent"
          color="pltnm.primary"
          onClick={signOutOnClick}
        >
          <Text
            fontSize="sm"
            fontWeight="normal"
            textDecoration={`underline 0.075em ${theme.colors.pltnm.primary}00`}
            textUnderlineOffset="0.2em"
            transition="text-decoration-color ease .2s"
            _hover={{
              textDecorationColor: `${theme.colors.pltnm.primary}ff`,
            }}
          >
            {t('global.SignOut')}
          </Text>
        </Button>
      ) : (
        <Button
          block="true"
          bg="transparent"
          color="pltnm.primary"
          onClick={goSignInOnClick}
        >
          <Text
            fontSize="sm"
            fontWeight="normal"
            textDecoration={`underline 0.075em ${theme.colors.pltnm.primary}00`}
            textUnderlineOffset="0.2em"
            transition="text-decoration-color ease .2s"
            _hover={{
              textDecorationColor: `${theme.colors.pltnm.primary}ff`,
            }}
          >
            {t('global.SignIn')}
          </Text>
        </Button>
      )}
    </HStack>
  );
}
