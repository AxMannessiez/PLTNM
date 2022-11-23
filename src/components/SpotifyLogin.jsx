import {SpotifyAccountApi} from "../spotifyApi/SpotifyAccountApi";

import {Box, Button, Link, VStack} from "@chakra-ui/react";
import {useSearchParams, useLocation} from "react-router-dom";


export function SpotifyLogin() {
    const location = useLocation();
    const userAuthentificationUrl = SpotifyAccountApi.getUserAuthentificationUrl();

    // TODO When retry
    /*
    if (location.state && location.state.error) {
        return (
            <VStack>
                <h1>The authorization failed.</h1>
                <Link href={userAuthentificationUrl}>
                    <Button bg='spotify.green'>
                        Retry with Spotify
                    </Button>
                </Link>
            </VStack>
        )
    }
     */

    return (
        <Box textAlign="center" py={40} px={10}>
            <Link href={userAuthentificationUrl}>
                <Button bg='spotify.green'>
                    Log in with Spotify
                </Button>
            </Link>
        </Box>
    )
}
