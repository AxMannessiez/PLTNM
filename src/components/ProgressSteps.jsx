import PropTypes from 'prop-types';

import { useMediaQuery } from '@chakra-ui/react';
import { Step, Steps } from 'chakra-ui-steps';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const getStepsStyle = isLargerThanSm => ({
  '& .cui-steps__horizontal-step': {
    cursor: 'default!important',
    '&[aria-disabled=true]': {
      opacity: 0.7,
    },
    '&:not(:last-child):after': {
      // Default track
      backgroundColor: '#e8e8e8!important',
      transition: 'none',
    },
    '&[data-active]': {
      cursor: 'pointer!important',
      '&:not(:last-child):before': {
        // Filled track for done steps
        content: '""',
        backgroundColor: 'pltnm.primary',
        height: '2px',
        position: 'absolute',
        top: `calc(${isLargerThanSm ? 20 : 16}px)`,
        left: `calc(50% + ${isLargerThanSm ? 28 : 24}px)`,
        right: `calc(-50% + ${isLargerThanSm ? 28 : 24}px)`,
        zIndex: 1,
        animation: `${
          isLargerThanSm ? 'progress' : 'progress-sm'
        } ease-out .3s`,
      },
    },
  },
  '& .cui-steps__horizontal-step-container': {
    '& > div:last-child > span': {
      // Text label
      fontFamily: 'body',
      color: 'pltnm.text',
      mt: 1,
    },
  },
  '& .cui-steps__step-icon-container': {
    background: 'white!important',
    borderColor: 'pltnm.primary!important',
    transition: 'border .1s ease-out',
    '&:hover': {
      // Prevent default green & pointer
      cursor: 'default!important',
      borderColor: 'pltnm.primary',
    },
    '&[data-active]': {
      cursor: 'pointer!important',
      background: 'pltnm.primary!important',
    },
    '&[aria-current=step]': {
      borderWidth: `${isLargerThanSm ? 3 : 2.5}px`,
      '& span': {
        color: 'pltnm.primary',
        fontWeight: 'bold!important',
      },
    },
    '& span': {
      // Number in circle
      fontFamily: 'numbers',
      fontWeight: '500!important',
    },
  },
});

function ProgressSteps(props) {
  const { activeStep, steps } = props;
  const navigate = useNavigate();

  const goBackStep = step => {
    if (step < activeStep) {
      navigate(`/start/step-${String(step + 1)}`);
    }
  };

  const [isLargerThanSm] = useMediaQuery('(min-width: 30em)');

  return isLargerThanSm ? (
    <Steps
      activeStep={activeStep}
      onClickStep={step => goBackStep(step)}
      variant="circles-alt"
      responsive={false}
      size="md"
      sx={getStepsStyle(true)}
    >
      {steps.map((label, index) => (
        <Step
          label={label}
          key={uuidv4()}
          className={index < activeStep ? 'clickable' : ''}
        />
      ))}
    </Steps>
  ) : (
    <Steps
      activeStep={activeStep}
      onClickStep={step => goBackStep(step)}
      variant="circles-alt"
      responsive={false}
      size="sm"
      sx={getStepsStyle(false)}
    >
      {steps.map((label, index) => (
        <Step
          label={label}
          key={uuidv4()}
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
