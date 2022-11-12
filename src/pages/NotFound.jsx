import {Box, Heading, Text, Button} from '@chakra-ui/react';
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <Box textAlign="center" py={40} px={10}>
            <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                fontWeight="bold"
                color="pltnm.primary">
                404
            </Heading>
            <Text fontSize="18px" mt={6} mb={1}>
                Page Not Found
            </Text>
            <Text color={'gray.500'} mb={6}>
                The page you're looking for does not seem to exist.
            </Text>

            <Button
                bg='pltnm.primary'
                color="white"
                variant="solid">
                <Link to='/'>
                    Go to Home
                </Link>
            </Button>
        </Box>
    );
}