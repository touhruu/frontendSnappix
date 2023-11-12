import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material';
import { theme } from '../theme';
// import { FC } from 'react';

// interface ITextFieldProps {

// }

export const Input = () => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        id="outlined-basic"
        label="Введите текст"
        variant="outlined"
        sx={{ color: 'text.primary' }}
      />
    </ThemeProvider>
  );
};
