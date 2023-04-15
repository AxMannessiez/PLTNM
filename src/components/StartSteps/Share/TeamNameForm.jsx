import PropTypes from 'prop-types';

import { FormControl, FormErrorMessage, Input, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Field, Form, Formik } from 'formik';

import PltnmButton from '../../base/PltnmButton';
import validateFormRequired from '../../SignIn/validateFormRequired';

// TODO Update team name in db

function TeamNameForm(props) {
  const { t } = useTranslation();

  const { initialName } = props;
  let previousTeamName = initialName;

  return (
    <Formik
      initialValues={{ teamName: initialName }}
      onSubmit={(values, actions) => {
        // Only update database if the value has changed
        if (values.teamName !== previousTeamName) {
          // console.log('Submit new name');
          /* player.save()   // Save in database
            .then(() => {
                storeUserName(player.name);
                storeUserId(player.id);
            }); */
          previousTeamName = values.teamName;
          actions.setSubmitting(false);
        } else {
          actions.setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <VStack spacing={6}>
            <Field
              name="teamName"
              validate={n =>
                validateFormRequired(n, t('fieldRequired.TeamName'))
              }
            >
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.teamName && form.touched.teamName}
                >
                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  <Input {...field} />
                  <FormErrorMessage>{form.errors.teamName}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <PltnmButton mt={4} isLoading={isSubmitting} type="submit" w="100%">
              {t('global.Save')}
            </PltnmButton>
          </VStack>
        </Form>
      )}
    </Formik>
  );
}

TeamNameForm.propTypes = {
  initialName: PropTypes.string,
};

TeamNameForm.defaultProps = {
  initialName: '',
};

export default TeamNameForm;
