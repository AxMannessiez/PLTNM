import React from "react";
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
    const cardStyleProps = {
        w: '150px',
        nameMargin: 1
    }
    return (
        <>
            <Center mt={20}>
                <SimpleGrid columns={3} spacingX={7} spacingY={4} maxW={'600px'}>
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

export default Home;