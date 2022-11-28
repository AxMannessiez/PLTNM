import {SpotifyAccountApi} from "../../spotifyApi/SpotifyAccountApi";

import {Box} from "@chakra-ui/react";
import {Navigate, useLocation} from "react-router-dom";

export function ChoosePlaylist() {
    const location = useLocation();

    // TODO If failed in the callback or come random on this page without token
    /*
    if (location.state &&location.state.error) {
        return <Navigate to={"/start/step-1"} state={{error: location.state.error}}/>;
    }
    if (!(SpotifyAccountApi.getToken().access_token)) {
        return <Navigate to={"/start/step-1"}/>;
    }
    */
    const spotifyToken = SpotifyAccountApi.getToken();

    return (
        <>
            <Box>Choose your playlist</Box>
            <Box sx={{wordBreak: 'break-word'}}>Token : {spotifyToken.accessToken}</Box>
        </>
    )
}