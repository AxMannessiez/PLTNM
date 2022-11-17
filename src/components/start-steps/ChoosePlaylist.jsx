import {Box} from "@chakra-ui/react";
import {useCookies} from "react-cookie";

export function ChoosePlaylist() {
    const [cookies, setCookie] = useCookies();
    return (
        <>
            <Box>Choose your playlist</Box>
            <Box>Code : {cookies.spotifyAuthorizationCode}</Box>
        </>
    )
}