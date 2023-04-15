import { useEffect, useState } from 'react';

import { ScaleFade, Text } from '@chakra-ui/react';
import { Auth } from '@supabase/auth-ui-react';
import env from 'react-dotenv';
import { useTranslation } from 'react-i18next';

import {
  buttonStyle,
  containerStyle,
  customTheme,
} from '../../auth/customAuthUITheme';
import supabase from '../../auth/supabaseClient';

export default function AuthChoice() {
  const { t, i18n } = useTranslation();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Text>{t('signIn.NeedAccount')}</Text>
      <ScaleFade initialScale={0.95} in={mounted} duration="1s">
        <Auth
          supabaseClient={supabase}
          socialLayout="vertical"
          providers={['spotify', 'google']}
          onlyThirdPartyProviders
          // view = 'sign_in'
          redirectTo={`${env.REACT_APP_SITE_URL}/signin`}
          localization={{
            lang: i18n.language,
            variables: {
              sign_in: {
                // email_label: 'Your email address',
                // password_label: 'Your strong password',
                social_provider_text: t('signIn.ContinueWith'),
              },
            },
          }}
          appearance={{
            theme: customTheme,
            style: {
              button: buttonStyle,
              container: containerStyle,
            },
          }}
        />
      </ScaleFade>
    </>
  );
}
