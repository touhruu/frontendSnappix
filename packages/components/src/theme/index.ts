import { createTheme } from '@mui/material';
import { deepPurple, grey } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Palette {
    vikakus: Palette['primary'];
  }

  interface PaletteOptions {
    vikakus?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    vikakus: true;
  }
}

export let theme = createTheme({});

theme = createTheme(theme, {
  palette: {
    vikakus: theme.palette.augmentColor({
      color: {
        main: deepPurple['500'],
      },
      name: 'primary',
    }),
    primary: {
      main: grey['500'],
    },
    text: {
      primary: grey['700'],
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    button: {
      fontFamily: 'sans-serif',
      textTransform: 'none',
    },
  },
});
