import {Center, Heading, Spinner, VStack} from "@chakra-ui/react";

export function SavingPlaylistSpinner(props) {
    return (
        <VStack justify='center'>
            <Heading as='h2' fontSize='xl' mt={10}>
                Saving your playlist!
            </Heading>
            <Center pt={5}>
                <Spinner color='pltnm.primary' size='md'/>
            </Center>
        </VStack>
    )
}