import React from "react";
import generateRandomString from "../helpers/generateRandomString";
import pkceChallenge from 'pkce-challenge';
import {ENDPOINTS} from "../constants/endpoints";
import {Box, Button, Link, Flex} from "@chakra-ui/react";
import {useLocation} from "react-router-dom";
import ProgressSteps from "./ProgressSteps";

const state = generateRandomString(16);
const { code_verifier, code_challenge } = pkceChallenge(48);

const userAuthentificationParams = new URLSearchParams({
    client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    response_type: 'code',
    redirect_uri: 'localhost:3000',
    state: state,
    scope: 'playlist-read-private playlist-read-collaborative',
    code_challenge_method: 'S256',
    code_challenge: code_challenge,
})
const baseUrl = process.env.REACT_APP_SPOTIFY_ACCOUNT_API_URL;
const endpoint = ENDPOINTS.spotify.authorize;
const userAuthentificationUrl = baseUrl + endpoint + '?' + userAuthentificationParams.toString();


function SpotifyLogin() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    if (error) {
        if (error === 'access_denied') {
            return <h1>Oh.</h1>
        }
        return <>
            <h1>Yikes.</h1>
            <h6>Just walk away</h6>
        </>
    }

    if (code) {
        return code;
    }

    return (
        <>
            <Flex justify={'center'} align={'center'}>
                <Box mt={10} w={'100%'} maxW={500}>
                    <ProgressSteps/>
                </Box>
            </Flex>
            <Box textAlign="center" py={40} px={10}>
                <Button bg='spotify.green'>
                    <Link href={userAuthentificationUrl}>Log in with Spotify</Link>
                </Button>
            </Box>
        </>
    )
}

export default SpotifyLogin;

