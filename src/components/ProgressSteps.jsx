import PropTypes from 'prop-types';

import { Step, Steps } from 'chakra-ui-steps';
import { useNavigate } from 'react-router-dom';

function ProgressSteps(props) {
  const { activeStep, steps } = props;
  const navigate = useNavigate();

  const goBackStep = step => {
    if (step < activeStep) {
      navigate(`/start/step-${String(step + 1)}`);
    }
  };

  return (
    <Steps
      labelOrientation="vertical"
      activeStep={activeStep}
      onClickStep={step => goBackStep(step)}
      responsive={false}
    >
      {steps.map((label, index) => (
        <Step
          label={label}
          // eslint-disable-next-line react/no-array-index-key
          key={label + index}
          className={index < activeStep ? 'clickable' : ''}
        />
      ))}
    </Steps>
  );
}

ProgressSteps.propTypes = {
  activeStep: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProgressSteps;
