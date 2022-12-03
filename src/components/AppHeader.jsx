import PltnmLogo from "./icons/PltnmLogo";

import {Box, HStack} from '@chakra-ui/react';
import {useLocation, Link} from "react-router-dom";


const excludedPages = [
    "/signin"
]

export default function AppHeader() {
    return (
        <>{
            !excludedPages.includes(useLocation().pathname) ?
                <HStack as='header' bg='pltnm.background' px='1.5em' h={16} alignItems={'center'}>
                    <Box>
                        <Link to='/'>
                            <PltnmLogo h='1.5em' w=''/>
                        </Link>
                    </Box>
                </HStack>
                :
                null
        }</>
    );
}