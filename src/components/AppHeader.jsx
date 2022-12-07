import PltnmLogo from "./icons/PltnmLogo";
import {supabase} from "../auth/supabaseClient";
import theme from "../theme";

import {Box, HStack, Spacer, Button, Text} from '@chakra-ui/react';
import {useLocation, Link} from "react-router-dom";
import {Auth} from "@supabase/auth-ui-react";
import {removeAll} from "../localStorage/removeAll";


const excludedPages = [
    "/signin"
]

function useShowHeader() {
    return !excludedPages.includes(useLocation().pathname);
}

function signOut() {
    removeAll();
    supabase.auth.signOut();
}

export default function AppHeader() {
    const {user} = Auth.useUser();

    return (
        <>{
            useShowHeader() ?
                <HStack as='header' bg='pltnm.background' px='1.5em' h={16} alignItems={'center'}>
                    <Box>
                        <Link to='/'>
                            <PltnmLogo h='1.5em' w=''/>
                        </Link>
                    </Box>
                    <Spacer/>
                    <>{
                        user ?
                            <Button block={"true"} bg='transparent' color='pltnm.primary' onClick={signOut}>
                                <Text fontSize='sm' fontWeight='normal'
                                      textDecoration={'underline 0.075em ' + theme.colors.pltnm.primary + '00'} textUnderlineOffset='0.2em'
                                      transition='text-decoration-color ease .2s' _hover={{textDecorationColor: theme.colors.pltnm.primary + 'ff'}}
                                >Sign Out</Text>
                            </Button>
                            :
                            <Button block={"true"} bg='transparent' color='pltnm.primary' as={Link} to='/signin'>
                                <Text fontSize='sm' fontWeight='normal'
                                      textDecoration={'underline 0.075em ' + theme.colors.pltnm.primary + '00'} textUnderlineOffset='0.2em'
                                      transition='text-decoration-color ease .2s' _hover={{textDecorationColor: theme.colors.pltnm.primary + 'ff'}}
                                >Sign In</Text>
                            </Button>
                    }</>

                </HStack>
                :
                null
        }</>
    );
}