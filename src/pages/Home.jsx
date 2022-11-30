import React from "react";
import {Center, Button} from "@chakra-ui/react";
import {Link} from "react-router-dom";


function Home(){

    return (
        <Center mt={40}>
            <Link to={'/start/'}>
                <Button bg='pltnm.primary'>Start</Button>
            </Link>
        </Center>
    )
}

export default Home;