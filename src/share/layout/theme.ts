// 1. Import the extendTheme function
import {extendTheme} from 'native-base';
// 2. Extend the theme to include custom colors, fonts, etc

const colors = {
  // Add new color
  primary: {
    50: '#EFEEFC',
    100: '#E0DDF9',
    200: '#D0CCF6',
    300: '#C1BBF3',
    400: '#B2AAF1',
    500: '#A299EE',
    600: '#9388EB',
    700: '#8377E8',
    800: '#7466E5',
    900: '#6556e3',
  },
  secondary: {
    50: '#FCE4EC',
    100: '#F8BBD0',
    200: '#F48FB1',
    300: '#F06292',
    400: '#EC407A',
    500: '#E91E63',
    600: '#D81B60',
    700: '#C2185B',
    800: '#AD1457',
    900: '#880E4F',
  },
  black: '#263238',
  // Redefining only one shade, rest of the color will remain same.
  amber: {
    400: '#d97706',
  },
};

export const theme = extendTheme({
  colors,
  fonts: {
    heading: 'OpenSans',
    body: 'OpenSans',
    mono: 'OpenSans',
  },
});
