import {SpotifyApi} from "../../spotifyApi/SpotifyApi";
import {PltnmButton} from "../base/PltnmButton";

import {
    Box,
    Heading,
    Wrap,
    WrapItem,
    AspectRatio,
    Center,
    Text,
    Image,
    SlideFade,
    HStack
} from "@chakra-ui/react";
import _ from 'lodash';
import {Link} from "react-router-dom";



// TODO Add animation
// TODO Check parameters / have token stored

export function CheckSongs() {
    const spotifyApi = new SpotifyApi();
    const lastYearPlaylistData = spotifyApi.getCurrentPlaylistData();

    // Get the different albums present in the playlist
    let playlistAlbums = {};
    for (const track of lastYearPlaylistData) {
        playlistAlbums[track.track.album.id] = track.track.album;
    }
    const samplePlaylistAlbums = _.sampleSize(playlistAlbums, 5);

    return (
        <>
            <Box as='header' textAlign='center'>
                <Heading as='h2' fontSize='2xl' fontWeight='bold'>Perfect!</Heading>
                <Heading as='h3' fontSize='xl' fontFamily='body' fontWeight='normal'>You should recognize some of these 🤓</Heading>
            </Box>
            <Wrap justify='center' pt={5} px={2} spacing={5} maxW='xl'>
                {
                    samplePlaylistAlbums ?
                    samplePlaylistAlbums.map((album, i) =>
                        <WrapItem key={album.id}>
                            <SlideFade in={true} duration={0.5} delay={0.5 + i*0.15}>
                                <AspectRatio ratio={1} w='10em' title={album.name + ' - ' + album.artists[0].name} borderRadius='base' border='1px #E0E0E0 solid' boxShadow='md' overflow='hidden'>
                                    {
                                        (album.images && album.images[1] && album.images[1].url) ?
                                            <Image src={album.images[1].url} alt={album.name}/>
                                            :
                                            <Center bgGradient='linear(to-tl, #1F1F1F, #393939)' w='100%' h='100%' p={2}>
                                                <Text fontSize='130%' color='white' align='center'>{album.name}</Text>
                                            </Center>
                                    }
                                </AspectRatio>
                            </SlideFade>
                        </WrapItem>
                    )
                    :
                    <></>
                }
            </Wrap>
            <Box pt={5}>
                <HStack>
                    <SlideFade in={true} delay={0.8} duration={1.5} offsetY={0}>
                        <Link to={'/start/step-2'}>
                            <PltnmButton variant='outline'>I don't, take me back!</PltnmButton>
                        </Link>
                    </SlideFade>
                    <SlideFade in={true} delay={1} duration={1.5} offsetY={0}>
                        <Link to={'/start/step-4'}>
                            <PltnmButton>I do!</PltnmButton>
                        </Link>
                    </SlideFade>
                </HStack>
            </Box>
        </>
    )
}
