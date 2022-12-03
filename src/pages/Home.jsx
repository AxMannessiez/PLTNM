import {PltnmButton} from "../components/base/PltnmButton";

import React from "react";
import {Container, VStack, Heading, Text, Center} from '@chakra-ui/react';
import {Link} from "react-router-dom";


function Home(){

    return (
        <Container maxW={'3xl'}>
            <VStack textAlign='center' spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
                <Heading as='h1' fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
                    How well do you <br /> know <Text as='span' color='pltnm.primary'>your friends?</Text>
                </Heading>
                <Heading as='h4' fontSize='lg' fontFamily='body' fontWeight='normal' color='gray.500'>
                    Do you have any idea what kind of music your friends listen to? It's time to find out if you're right.
                </Heading>
                <Center spacing={3}>
                    <Link to={'/start/'}>
                        <PltnmButton rounded={'full'} px={6}>Get Started</PltnmButton>
                    </Link>
                </Center>
            </VStack>
        </Container>
    )
}

export default Home;