import {customTheme, containerStyle, buttonStyle} from "../../auth/customAuthUITheme";
import {supabase} from "../../auth/supabaseClient";

import {Auth} from "@supabase/auth-ui-react";
import {Text, ScaleFade} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import env from "react-dotenv";


export default function AuthChoice() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {setMounted(true)}, []);

    return <>
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
    </>
}