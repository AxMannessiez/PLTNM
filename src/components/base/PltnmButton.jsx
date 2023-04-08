import PropTypes from 'prop-types';

import { Button } from '@chakra-ui/react';

const baseStyle = {
  px: 4,
  _hover: {
    opacity: '.8',
  },
};

const solidStyle = {
  ...baseStyle,
  bg: 'pltnm.primary',
  color: 'white',
};

const outlineStyle = {
  ...baseStyle,
  variant: 'outline',
  borderColor: 'pltnm.primary',
  color: 'pltnm.primary',
  fontWeight: 'normal',
};

function PltnmButton(props) {
  const { variant } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Button sx={variant === 'outline' ? outlineStyle : solidStyle} {...props} />
  );
}

PltnmButton.propTypes = {
  variant: PropTypes.string,
};

PltnmButton.defaultProps = {
  variant: 'solid',
};

export default PltnmButton;
