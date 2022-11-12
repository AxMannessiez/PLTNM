import {Flex, Heading, Button} from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps"

const steps = ["Login", "Choose playlist", "Verify"];

export const ProgressSteps = () => {
    const { nextStep, prevStep, reset, activeStep } = useSteps({
        initialStep: 0,
    })
    return (
        <Flex flexDir="column" width="100%">
            <Steps labelOrientation="vertical" activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step label={label} key={label} >
                        <Flex justify={'center'} align={'center'} p={10}>Step {index + 1}</Flex>
                    </Step>
                ))}
            </Steps>
            {activeStep === steps.length ? (
                <Flex px={4} py={4} width="100%" flexDirection="column">
                    <Heading fontSize="xl" textAlign="center">
                        Woohoo! All steps completed!
                    </Heading>
                    <Button mx="auto" mt={6} size="sm" onClick={reset}>
                        Reset
                    </Button>
                </Flex>
            ) : (
                <Flex width="100%" justify="flex-end">
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
                </Flex>
            )}
        </Flex>
    )
}

export default ProgressSteps