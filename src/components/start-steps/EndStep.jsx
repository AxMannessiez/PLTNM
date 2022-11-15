import {Button, Heading} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export function EndStep() {
    return (
        <>
            <Heading fontSize="xl" textAlign="center">
                Woohoo! All steps completed!
            </Heading>
            <Button mx="auto" mt={6} size="sm">
                <Link to="/">Go Home</Link>
            </Button>
        </>
    )
}
