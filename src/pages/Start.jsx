import {Flex, Button, Center, VStack, Box} from "@chakra-ui/react";
import {useSteps} from "chakra-ui-steps";
import {ProgressSteps} from "../components/ProgressSteps";
import {MusicProviderLogin} from "../components/start-steps/MusicProviderLogin";
import {ChoosePlaylist} from "../components/start-steps/ChoosePlaylist";
import {CheckSongs} from "../components/start-steps/CheckSongs";
import {EndStep} from "../components/start-steps/EndStep";
import {useParams, Navigate} from "react-router-dom";

const steps = {
    labels: ["Login", "Selection", "Check"],
    components: [<MusicProviderLogin/>, <ChoosePlaylist/>, <CheckSongs/>]
};

const Start = (props) => {
    let { nextStep, prevStep, reset, activeStep } = useSteps({
        initialStep: 0,
    })

    // Step param in route
    let { stepIdx } = useParams();
    //TODO Check is number
    activeStep = (stepIdx > 4) ? 0 : +stepIdx-1;   // Use URL value - 1 for the step
    if (stepIdx > 4) {
        return <Navigate to='/start/step-1' replace />;
    }

    return (
        <VStack as="main" w="100%">
            <Box pt={10} px={10} w="100%" maxW={580}>
                <ProgressSteps steps={steps.labels} activeStep={activeStep}/>
            </Box>
            <VStack pt={10} px={10}>
                {activeStep >= steps.labels.length ? (
                    <Flex px={4} py={4} width="100%" flexDirection="column">
                        <EndStep/>
                    </Flex>
                ) : (
                    <>
                        {steps.components[activeStep]}
                        <Center pt={10} w="100%">
                            <Button
                                isDisabled={activeStep === 0}
                                mr={4}
                                onClick={prevStep}
                                size="sm"
                                variant="ghost"
                            >
                                Prev
                            </Button>
                            <Button bg='pltnm.primary' size="sm" onClick={nextStep}>
                                {activeStep === steps.length - 1 ? "Finish" : "Next"}
                            </Button>
                        </Center>
                    </>
                )}
            </VStack>
        </VStack>
    )
}

export default Start;