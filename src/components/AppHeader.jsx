import {
    Box, Button,
    Flex,
} from '@chakra-ui/react';
import PltnmLogo from "./icons/PltnmLogo";

export default function Nav() {
    return (
        <>
            <Box bg='pltnm.background' px='1.5em'>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box><PltnmLogo h='1.5em' w=''/></Box>
                </Flex>
            </Box>
        </>
    );
}