import {Step, Steps} from "chakra-ui-steps"

export function ProgressSteps(props) {
    return (
        <Steps labelOrientation="vertical" activeStep={props.activeStep} responsive={false}>
            {props.steps.map((label) => (
                <Step label={label} key={label}/>
            ))}
        </Steps>
    )
}
