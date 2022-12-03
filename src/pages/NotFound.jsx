import {PltnmButton} from "../components/base/PltnmButton";

import {Box, Heading, Text, Button} from '@chakra-ui/react';
import { Link } from "react-router-dom"


export default function NotFound() {
    return (
        <Box textAlign="center" py={40} px={10}>
            <Heading as="h1" size="2xl" color="pltnm.primary">404</Heading>
            <Heading as="h3" fontSize="18px" fontFamily='body' fontWeight='normal' mt={6} mb={1}>Page Not Found</Heading>
            <Text color={'gray.500'} mb={6}>The page you're looking for does not seem to exist.</Text>

            <PltnmButton>
                <Link to='/'>Go to Home</Link>
            </PltnmButton>
        </Box>
    );
}