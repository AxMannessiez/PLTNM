import {
    AmazonMusicLogoCard,
    AppleMusicLogoCard,
    DeezerLogoCard,
    NapsterLogoCard,
    SpotifyLogoCard,
    TidalLogoCard,
    PandoraLogoCard,
    YoutubeMusicLogoCard, SoundcloudLogoCard
} from "./MusicServicesLogoCards";

import {Box, Heading, Text, Center, SimpleGrid} from "@chakra-ui/react";


export function MusicServiceLogin() {
    const cardStyleProps = {
        maxW: '200px',
        nameMargin: { base: 0, sm: 1}
    }

    //TODO Add toast message if auth failed

    return (
        <>
            <Box as='header' textAlign='center'>
                <Heading as='h2' fontSize='2xl' fontWeight='bold'>Let's Start!</Heading>
                <Heading as='h3' fontSize='xl' fontFamily='body' fontWeight='normal'>Choose you music service.</Heading>
                <Text lineHeight='shorter' mt={2}>You'll be redirected there to log in and grant us permission to see your playlists!</Text>
            </Box>
            <Center pt={{base: 6, sm: 10}}>
                <SimpleGrid columns={3} spacingX={{base: 4, sm: 7}} spacingY={{base: 2, sm: 4}}  maxW={{base: '40vh', sm: '550px'}}>
                    <SpotifyLogoCard {...cardStyleProps}/>
                    <AppleMusicLogoCard {...cardStyleProps} link="https://music.apple.com/subscribe"/>
                    <DeezerLogoCard {...cardStyleProps}/>
                    <YoutubeMusicLogoCard {...cardStyleProps}/>
                    <TidalLogoCard {...cardStyleProps}/>
                    <PandoraLogoCard {...cardStyleProps}/>
                    <SoundcloudLogoCard {...cardStyleProps}/>
                    <AmazonMusicLogoCard {...cardStyleProps}/>
                    <NapsterLogoCard {...cardStyleProps}/>
                </SimpleGrid>
            </Center>
        </>
    )
}
