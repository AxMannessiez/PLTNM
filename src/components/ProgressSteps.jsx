import { Step, Steps } from 'chakra-ui-steps';
import { useNavigate } from 'react-router-dom';

export default function ProgressSteps(props) {
  const { activeStep } = props;
  const navigate = useNavigate();

  function goBackStep(step) {
    if (step < activeStep) {
      navigate(`/start/step-${String(step + 1)}`);
    }
  }

  return (
    <Steps
      labelOrientation="vertical"
      activeStep={props.activeStep}
      onClickStep={step => goBackStep(step)}
      responsive={false}
    >
      {props.steps.map((label, index) => (
        <Step
          label={label}
          key={label + index}
          className={index < activeStep ? 'clickable' : ''}
        />
      ))}
    </Steps>
  );
}
