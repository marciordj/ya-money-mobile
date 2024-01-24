import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    background: '#3CD079',

    danger: '#f2615a',
    success: '#3dc67c'
  }
};
