import {supabase} from "../auth/supabaseClient";
import {customTheme, containerStyle, buttonStyle} from "../auth/customAuthUITheme";
import {PltnmButton} from "../components/base/PltnmButton";
import {storeUserName} from "../localStorage/userName";


import {Auth} from '@supabase/auth-ui-react'
import {VStack, Heading, Text, ScaleFade, Input, FormControl, FormErrorMessage} from "@chakra-ui/react";
import { Field, Form, Formik } from 'formik';
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import env from "react-dotenv";
import {capitalize} from "lodash/string";

// TODO Change error color to pltnm
// TODO Remove User info example
// TODO Add state parameter check to set the redirectTo
// TODO Recode it without the Supabase UI (to get Chakra components)
// TODO Put Spotify last if user chose other app for playlist

function validateFormName(value) {
    let error;
    if (!value) {
        error = 'Name is required';
    }
    return error;
}

const Container = (props) => {
    const {user} = Auth.useUser();
    const navigate = useNavigate();
    if (user) {
        if (user.app_metadata && user.app_metadata.provider) {
            return (
                <>
                    <Text pt={5}>Signed in with {capitalize(user.app_metadata.provider)} ✔️</Text>
                    <Text pt={5}>Now we only need your name!</Text>
                    <Formik
                        initialValues={{ name: '' }}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                                storeUserName(values.name);
                                actions.setSubmitting(false);
                                navigate("/");
                            }, 100);
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
                                    <PltnmButton mt={4} isLoading={props.isSubmitting} type='submit'>Continue</PltnmButton>
                                </VStack>
                            </Form>
                        )}
                    </Formik>
                </>
            );
        }
        return props.children;
    }

    return props.children;
};

export default function SignIn() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {setMounted(true)}, []);

    return (
        <VStack h='100vh' justify='center'>
            <Heading as='h1' fontSize='2xl' fontWeight='700'>Sign In</Heading>
            <Container supabaseClient={supabase}>
                <Text>We need an account to store your songs!</Text>
                <ScaleFade initialScale={0.95} in={mounted} duration={'1s'}>
                    <Auth
                        supabaseClient={supabase}
                        socialLayout='vertical'
                        providers={['spotify', 'google']}
                        onlyThirdPartyProviders={true}
                        //view = 'sign_in'
                        redirectTo={env.REACT_APP_SITE_URL +'/signin'}
                        //localization = {{ lang: 'fr' }}
                        localization={{
                            //lang: 'fr',
                            variables: {
                                sign_in: {
                                    //email_label: 'Your email address',
                                    //password_label: 'Your strong password',
                                    social_provider_text: 'Continue with'
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
            </Container>
        </VStack>
    );
};
