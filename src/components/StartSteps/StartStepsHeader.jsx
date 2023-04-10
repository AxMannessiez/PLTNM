import PropTypes from 'prop-types';

import { Box, Heading, Text } from '@chakra-ui/react';

function StartStepsHeader(props) {
  const { title, subtitle, description } = props;

  return (
    <Box as="header" textAlign="center">
      <Heading as="h2" fontSize="2xl" fontWeight="bold">
        {title}
      </Heading>
      {subtitle ? (
        <Heading as="h3" fontSize="xl" fontFamily="body" fontWeight="normal">
          {subtitle}
        </Heading>
      ) : null}
      {description ? (
        <Text lineHeight="shorter" mt={2}>
          {description}
        </Text>
      ) : null}
    </Box>
  );
}

StartStepsHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
};

StartStepsHeader.defaultProps = {
  subtitle: null,
  description: null,
};

export default StartStepsHeader;
