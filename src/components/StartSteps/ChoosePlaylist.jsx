import {SpotifyAccountApi} from "../../spotifyApi/SpotifyAccountApi";

import {Box, Heading, Text, SimpleGrid, Input, Spacer, Button} from "@chakra-ui/react";
import {Card, CardHeader, CardBody, CardFooter} from "@chakra-ui/card";
import {Select} from "chakra-react-select";
import {Navigate, useLocation} from "react-router-dom";

export function ChoosePlaylist() {
    // TODO Check parameters / have token stored
    /*
    if (location.state &&location.state.error) {
        return <Navigate to={"/start/step-1"} state={{error: location.state.error}}/>;
    }
    if (!(SpotifyAccountApi.getToken().access_token)) {
        return <Navigate to={"/start/step-1"}/>;
    }
    */
    const spotifyToken = SpotifyAccountApi.getToken();

    // Last year playlist
    const lastYearPlaylist = {
        name: "Your Top Songs 2021"
    }

    // TODO Fetch possible years / playlists for second card
    const yearOptions = [
        { value: "2020", label: "2020"},
        { value: "2019", label: "2019"},
        { value: "2018", label: "2018"}
    ];

    // TODO Implement search for third card
    const playlistOptions = [
        { value: "id1", label: "My Playlist 1"},
        { value: "id2", label: "Songs for running"},
        { value: "id3", label: "My Playlist 2"}
    ];

    // TODO Mobile version

    return (
        <>
            <Box as='header' textAlign='center'>
                <Heading as='h2' fontSize='2xl' fontWeight='bold'>Great!</Heading>
                <Heading as='h3' fontSize='xl' fontFamily='body' fontWeight='normal'>Now for the playlist:</Heading>
            </Box>
            <SimpleGrid pt={{base: 4, sm: 6}} spacing={6} columns={3} maxW={'4xl'}>
                <Card align='stretch' textAlign='center' boxShadow='md' borderRadius='lg' p={5} border='1px' borderColor='gray.200'>
                    <CardHeader mb={5}>
                        <Heading as='h4' size='md'>Pick your last year top songs</Heading>
                    </CardHeader>
                    <Spacer/>
                    <CardFooter>
                        <Button bg='pltnm.primary' minW='50%' m='auto'>Go!</Button>
                    </CardFooter>
                </Card>
                <Card align='stretch' textAlign='center' boxShadow='md' borderRadius='lg' p={5} border='1px' borderColor='gray.200'>
                    <CardHeader mb={5}>
                        <Heading as='h4' size='md'>Pick from a previous year top songs</Heading>
                    </CardHeader>
                    <CardBody mb={5}>
                        <Box w={'50%'} m={'auto'}>
                            <Select
                                size='md' placeholder='Year' options={yearOptions}
                                useBasicStyles={true} focusBorderColor="pltnm.primary" selectedOptionColor="pltnm.primaryValues"
                            />
                        </Box>
                    </CardBody>
                    <Spacer/>
                    <CardFooter>
                        <Button bg='pltnm.primary' minW='50%' m='auto'>Go!</Button>
                    </CardFooter>
                </Card>
                <Card align='stretch' textAlign='center' boxShadow='md' borderRadius='lg' p={5} border='1px' borderColor='gray.200'>
                    <CardHeader mb={5}>
                        <Heading as='h4' size='md'>Pick from a personal playlist</Heading>
                    </CardHeader>
                    <CardBody mb={5}>
                        <Select
                            size='md'  placeholder='Playlist' options={playlistOptions}
                            useBasicStyles={true} focusBorderColor="pltnm.primary" selectedOptionColor="pltnm.primaryValues"
                        />
                    </CardBody>
                    <Spacer/>
                    <CardFooter>
                        <Button bg='pltnm.primary' minW='50%' m='auto'>Go!</Button>
                    </CardFooter>
                </Card>
            </SimpleGrid>
            <Text sx={{wordBreak: 'break-word'}}>Token : {spotifyToken.accessToken}</Text>
        </>
    )
}