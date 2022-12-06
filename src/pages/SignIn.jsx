import {AskName, AuthChoice} from "../components/SignIn";

import {Auth} from '@supabase/auth-ui-react'
import {VStack, Heading} from "@chakra-ui/react";


// TODO Change error color to pltnm
// TODO Add state parameter check to set the redirectTo
// TODO Recode it without the Supabase UI (to get Chakra components)
// TODO Put Spotify last if user chose other app for playlist

export default function SignIn() {
    const {user} = Auth.useUser();

    return (
        <VStack h='100vh' justify='center'>
            <Heading as='h1' fontSize='2xl' fontWeight='700'>Sign In</Heading>
            <>{
                user ?
                    (user.app_metadata && user.app_metadata.provider) ?
                        <AskName user={user}/>
                        :
                        <AuthChoice/>
                    :
                    <AuthChoice/>
            }</>
        </VStack>
    );
};
