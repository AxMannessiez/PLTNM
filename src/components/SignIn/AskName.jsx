import {storeUserName} from "../../localStorage/userName";
import {PltnmButton} from "../base/PltnmButton";
import {validateFormName} from "./validateFormName";
import {getRedirectAfterSignIn, removeRedirectAfterSignIn} from "../../localStorage/redirectAfterSignIn";

import {Text, VStack, FormControl, Input, FormErrorMessage} from "@chakra-ui/react";
import {Formik, Form, Field} from "formik";
import {useNavigate} from "react-router-dom";
import {capitalize} from "lodash/string";
import {Auth} from "@supabase/auth-ui-react";
import {Player} from "../../database/Player";

export default function AskName(props) {
    const {user} = Auth.useUser();
    const navigate = useNavigate();

    return (
        <>
            <Text pt={5}>Signed in with {capitalize(props.user.app_metadata.provider)} ✔️</Text>
            <Text pt={5}>Now we only need your name!</Text>
            <Formik
                initialValues={{ name: '' }}
                onSubmit={(values, actions) => {
                    const player = new Player(values.name, user.id);
                    player.save()
                        .then(() => {
                            storeUserName(values.name);
                            actions.setSubmitting(false);
                            navigate(getRedirectAfterSignIn());
                            removeRedirectAfterSignIn();
                    });
                }}
            >
                {(props) => (
                    <Form>
                        <VStack spacing={6}>
                            <Field name='name' validate={validateFormName}>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <Input {...field} placeholder='John' />
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <PltnmButton mt={4} isLoading={props.isSubmitting} type='submit' w='100%'>Continue</PltnmButton>
                        </VStack>
                    </Form>
                )}
            </Formik>
        </>
    );
}