// 1. Import the extendTheme function
import {extendTheme} from 'native-base';
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  // Add new color
  primary: {
    50: '#F3E5F5',
    100: '#E1BEE7',
    200: '#CE93D8',
    300: '#BA68C8',
    400: '#AB47BC',
    500: '#9C27B0',
    600: '#8E24AA',
    700: '#7B1FA2',
    800: '#6A1B9A',
    900: '#4A148C',
  },
  secondary: {
    50: '#F3E5F5',
    100: '#E1BEE7',
    200: '#CE93D8',
    300: '#BA68C8',
    400: '#AB47BC',
    500: '#9C27B0',
    600: '#8E24AA',
    700: '#7B1FA2',
    800: '#6A1B9A',
    900: '#4A148C',
  },
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
