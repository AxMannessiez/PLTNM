import {supabase} from "../auth/supabaseClient";
import {customTheme, containerStyle, buttonStyle} from "../auth/customAuthUITheme";

import {Auth} from '@supabase/auth-ui-react'
import {VStack, Heading, Button, Text} from "@chakra-ui/react";

// TODO Remove User info example
// TODO Add logout in header
// TODO Add state parameter check to set the redirectTo
// TODO Recode it without the Supabase UI (to get Chakra components)

const Container = (props) => {
    const { user} = Auth.useUser();
    if (user)
        return (
            <>
                <Text>Hello {user.identities[0]?.identity_data?.name ?? ''}!</Text>
                <Text>Signed in: {user.email ?? ''}</Text>
                <Button block={"true"} bg='pltnm.primary' onClick={() => props.supabaseClient.auth.signOut()}>
                    Sign out
                </Button>
            </>
        );
    return props.children;
};

export default function SignIn() {
    return (
        <VStack h='100vh' justify='center'>
            <Heading as='h1' size='lg' fontWeight='700'>Sign In</Heading>
            <Text>We need an account to store your songs!</Text>
            <Auth.UserContextProvider supabaseClient={supabase}>
                <Container supabaseClient={supabase}>
                    <Auth
                        supabaseClient={supabase}
                        socialLayout='vertical'
                        providers={['apple', 'google', 'spotify']}
                        onlyThirdPartyProviders={true}
                        //view = 'sign_in'
                        redirectTo='http://localhost:3000/signin'
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
                </Container>
            </Auth.UserContextProvider>
        </VStack>
    );
};
