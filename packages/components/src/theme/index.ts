import { createTheme } from '@mui/material/styles';
// import { createTheme } from '@mui/system';
// import { deepPurple, grey } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#673ab7',
    },
    secondary: {
      main: '#fff',
    },
    background: {
      default: '#181820',
      paper: '#1d1d24',
    },
  },
  typography: {
    // body1: {
    //   fontSize: 16,
    //   color: '#ffffffb8',
    //   // fontWeight: 'bold',
    // },
    // body2: {
    //   fontSize: 28,
    //   color: 'white',
    //   fontWeight: 'initial',
    // },
    h3: {
      fontSize: 20,
      color: '#ffffffb8',
      fontWeight: 'bold',
    },
  },
});
