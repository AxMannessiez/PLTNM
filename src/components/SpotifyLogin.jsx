import {React, useEffect} from "react";
import {Box, Button, Link, VStack} from "@chakra-ui/react";
import {useLocation, useNavigate} from "react-router-dom";
import {ENDPOINTS} from "../constants/endpoints";
import generateRandomString from "../helpers/generateRandomString";
import pkceChallenge from 'pkce-challenge';
import { withCookies, useCookies } from 'react-cookie';

const state = generateRandomString(16);
const { codeVerifier, codeChallenge } = pkceChallenge(48);

const redirectUri = 'http://localhost:3000/start';
const userAuthentificationParams = new URLSearchParams({
    client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    response_type: 'code',
    redirect_uri: redirectUri,
    state: state,
    scope: 'playlist-read-private playlist-read-collaborative',
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
})
const baseUrl = process.env.REACT_APP_SPOTIFY_ACCOUNT_API_URL;
const endpoint = ENDPOINTS.spotify.authorize;
const userAuthentificationUrl = baseUrl + endpoint + '?' + userAuthentificationParams.toString();


function SpotifyLogin() {
    // Set cookies
    const [cookies, setCookie] = useCookies();
    setCookie('redirectUri', redirectUri, { path: '/' });
    setCookie('spotifyCodeVerifier', codeVerifier, { path: '/' });

    // Check URL params
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    // Redirect to step 2 when authorize done
    let navigate = useNavigate();
    useEffect(() => {
        if (code) {
            setCookie('spotifyAuthorizationCode', code, { path: '/' });
            navigate('/start/step-2');
        }
    });

    // Offer to retry step 1 if authorize failed
    if (error) {
        return (
            <VStack>
                <h1>Access Denied.</h1>
                <Button bg='gray.200' color='black'>
                    <Link href={userAuthentificationUrl}>Retry</Link>
                </Button>
            </VStack>
        )
    }

    // Default : log in
    return (
        <Box textAlign="center" py={40} px={10}>
            <Button bg='spotify.green'>
                <Link href={userAuthentificationUrl}>Log in with Spotify</Link>
            </Button>
        </Box>
    )
}

export default withCookies(SpotifyLogin);

