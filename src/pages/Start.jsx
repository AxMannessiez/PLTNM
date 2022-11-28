import {Flex, VStack, Box} from "@chakra-ui/react";
import {useSteps} from "chakra-ui-steps";
import {ProgressSteps} from "../components/ProgressSteps";
import {MusicServiceLogin, ChoosePlaylist, CheckSongs, EndStep} from "../components/StartSteps";
import {useParams, Navigate} from "react-router-dom";

const steps = {
    labels: ["Login", "Selection", "Check"],
    components: [<MusicServiceLogin/>, <ChoosePlaylist/>, <CheckSongs/>]
};

const Start = (props) => {
    let { nextStep, prevStep, reset, activeStep } = useSteps({
        initialStep: 0,
    })

    // Step param in route
    let { stepIdx } = useParams();
    if (!(stepIdx > 0  && stepIdx < 5)) {
        return <Navigate to='/start/step-1' replace />;
    }
    activeStep = +stepIdx-1;


    return (
        <VStack as="main" w="100%">
            <Box pt={{base: 8, sm: 10}} px={10} w="100%" maxW={580}>
                <ProgressSteps steps={steps.labels} activeStep={activeStep}/>
            </Box>
            <VStack pt={{base: 6, sm: 10}} px={10}>
                {activeStep >= steps.labels.length ? (
                    <Flex px={4} py={4} width="100%" flexDirection="column">
                        <EndStep/>
                    </Flex>
                ) : (
                    <>
                        {steps.components[activeStep]}
                    </>
                )}
            </VStack>
        </VStack>
    )
}

export default Start;