import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import { StepsTheme } from 'chakra-ui-steps';

import '@fontsource/source-sans-pro';
import '@fontsource/space-grotesk';
import '@fontsource/lato';

// TODO use text color by default

const colors = {
  pltnm: {
    primary: '#F32346',
    secondary: '#0D1CEB',
    background: '#EBE1D4',
    text: '#171717',
    primaryValues: {
      300: '#F32346',
      500: '#F32346',
    },
  },
};

const fonts = {
  heading: `'Space Grotesk', sans-serif`,
  body: `'Source Sans Pro', sans-serif`,
  numbers: `'Lato', sans-serif`,
};

const theme = extendTheme(
  {
    colors,
    fonts,
    components: {
      Steps: StepsTheme,
    },
  },
  withDefaultColorScheme({
    colorScheme: 'primary',
  })
);

export default theme;
