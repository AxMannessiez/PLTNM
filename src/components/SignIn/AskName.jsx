import PropTypes from 'prop-types';

import {
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import { capitalize } from 'lodash/string';

import validateFormRequired from './validateFormRequired';
import PltnmButton from '../base/PltnmButton';
import { Player } from '../../database';
import {
  getRedirectAfterSignIn,
  removeRedirectAfterSignIn,
  storeUserId,
  storeUserName,
} from '../../localStorage';

function AskName(props) {
  const { user } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Text pt={5}>
        {t('signIn.SignedInWith', {
          provider: capitalize(user.app_metadata.provider),
        })}
      </Text>
      <Text pt={5}>{t('signIn.NeedName')}</Text>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={(values, actions) => {
          const playerPicture =
            user.user_metadata.picture || user.user_metadata.avatar_url || null;
          const player = new Player(values.name, playerPicture, user.id);
          player
            .save() // Save in database
            .then(() => {
              storeUserName(player.name);
              storeUserId(player.id);
              actions.setSubmitting(false);
              navigate(getRedirectAfterSignIn());
              removeRedirectAfterSignIn();
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <VStack spacing={6}>
              <Field
                name="name"
                validate={name =>
                  validateFormRequired(name, t('fieldRequired.Name'))
                }
              >
                {({ field, form }) => (
                  <FormControl
                    isInvalid={!!form.errors.name && !!form.touched.name}
                  >
                    <Input
                      type="text"
                      placeholder={t('global.DefaultName')}
                      autoComplete="given-name"
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...field}
                      aria-required="true"
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <PltnmButton
                mt={4}
                isLoading={isSubmitting}
                type="submit"
                w="100%"
              >
                {t('global.Continue')}
              </PltnmButton>
            </VStack>
          </Form>
        )}
      </Formik>
    </>
  );
}

AskName.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    app_metadata: PropTypes.shape({
      provider: PropTypes.string,
    }).isRequired,
    user_metadata: PropTypes.shape({
      picture: PropTypes.string,
      avatar_url: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default AskName;
