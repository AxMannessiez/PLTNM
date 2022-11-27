import React from "react";
import {SpotifyLogin} from "../components/SpotifyLogin";
import {
    AmazonMusicLogoCard,
    AppleMusicLogoCard,
    DeezerLogoCard,
    NapsterLogoCard,
    SpotifyLogoCard,
    TidalLogoCard,
    PandoraLogoCard,
    YoutubeMusicLogoCard, SoundcloudLogoCard
} from "../components/startSteps/MusicServicesLogoCards";
import {Center, SimpleGrid} from "@chakra-ui/react";


function Home(){
    const cardW = '150px';
    const cardNameMargin = 2;
    return (
        <>
            <Center mt={20}>
                <SimpleGrid columns={3} spacingX={5} spacingY={4} maxW={'600px'}>
                    <SpotifyLogoCard w={cardW} nameMargin={cardNameMargin}/>
                    <AppleMusicLogoCard w={cardW} nameMargin={cardNameMargin}/>
                    <DeezerLogoCard w={cardW} nameMargin={cardNameMargin}/>
                    <YoutubeMusicLogoCard w={cardW} nameMargin={cardNameMargin}/>
                    <TidalLogoCard w={cardW} nameMargin={cardNameMargin}/>
                    <PandoraLogoCard w={cardW} nameMargin={cardNameMargin}/>
                    <SoundcloudLogoCard w={cardW} nameMargin={cardNameMargin}/>
                    <AmazonMusicLogoCard w={cardW} nameMargin={cardNameMargin}/>
                    <NapsterLogoCard w={cardW} nameMargin={cardNameMargin}/>
                </SimpleGrid>
            </Center>
        </>
    )
}

export default Home;