import AppHeader from "../components/AppHeader";
import ProgressSteps from "../components/ProgressSteps";
import {MusicServiceLogin, ChoosePlaylist, CheckSongs, EndStep} from "../components/StartSteps";

import {VStack, Box} from "@chakra-ui/react";
import {useSteps} from "chakra-ui-steps";
import {useParams, Navigate} from "react-router-dom";


// TODO Page Name

const steps = {
    labels: ["Login", "Selection", "Check"],
    components: [<MusicServiceLogin/>, <ChoosePlaylist/>, <CheckSongs/>]
};

const Start = (props) => {
    let { activeStep, setStep } = useSteps({
        initialStep: 0,
    })

    // Step param in route
    let { stepIdx } = useParams();
    if (!(stepIdx > 0  && stepIdx < 5)) {
        return <Navigate to='/start/step-1' replace />;
    }
    activeStep = +stepIdx-1;


    return (
        <>
            <AppHeader/>
            <VStack as="main" w="100%" pb={20}>
                <Box pt={{base: 8, sm: 10}} px={10} w="100%" maxW={580}>
                    <ProgressSteps steps={steps.labels} activeStep={activeStep}/>
                </Box>
                <VStack pt={{base: 6, sm: 10}} px={10}>
                    {activeStep >= steps.labels.length ? (
                        <EndStep/>
                    ) : (
                        <>
                            {steps.components[activeStep]}
                        </>
                    )}
                </VStack>
            </VStack>
        </>
    )
}

export default Start;