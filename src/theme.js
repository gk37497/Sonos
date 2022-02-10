import {extendTheme} from 'native-base';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

const colors = {
  primary: {
    50: '#ffe8df',
    100: '#ffc1b1',
    200: '#ff987f',
    300: '#ff704d',
    400: '#fe481b',
    500: '#e52f02',
    600: '#b32400',
    700: '#811800',
    800: '#4f0c00',
    900: '#200100',
  },
  dark: {
    50: '#f3f3f2',
    100: '#dadada',
    200: '#c1c1c1',
    300: '#a8a8a8',
    400: '#8f8f8f',
    500: '#767676',
    600: '#5c5c5c',
    700: '#414141',
    800: '#272727',
    900: '#0d0d0c',
  },
};

export default extendTheme({config, colors});
