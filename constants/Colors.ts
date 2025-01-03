/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#000000',
    text_secondary: '#4D4747',
    background: '#F5F5F7',
    //background: '#EAEAEA',
    button_background: '#FF7E01',
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    neutral_04: '#E0E0E0',
    primary_01: '#FF7E01',
    white: '#fff',
    tabbarBackground: '#FFF',
    tabbarActiveColor: 'orange',
    tabbarInactiveColor: '#000',
    separator: '#A5A5A5',
    green: '#219653',
    addressNormal: '#C9D4E4',
    red: '#EB5757'

  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
