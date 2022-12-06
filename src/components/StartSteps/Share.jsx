import {SpotifyApi} from "../../spotifyApi/SpotifyApi";

import {Container, Center} from '@chakra-ui/react';


export function Share(){

    function savePlaylistAsCsv() {
        const data = encodeURI(SpotifyApi.getCurrentPlaylistDataCsvExport());
        const link = document.createElement("a");
        link.setAttribute("href", data);
        link.setAttribute("download", "My Spotify Top Songs.csv");
        link.click();
    }

    return (
        <Container maxW={'3xl'} mt={20}>
            <Center>Share the link with your friends to play!</Center>
        </Container>
    )
}