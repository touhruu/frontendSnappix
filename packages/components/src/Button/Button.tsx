import { ThemeProvider } from '@mui/material';
import MButton from '@mui/material/Button';
import { FC } from 'react';
import { theme } from '../theme';

interface IButtonProps {
  primary: boolean;
  children?: React.ReactChild | React.ReactNode;
}

export const Button: FC<IButtonProps> = ({ children, primary }) => {
  return (
    <ThemeProvider theme={theme}>
      <MButton color="vikakus" variant={primary ? 'contained' : 'outlined'}>
        {children}
      </MButton>
    </ThemeProvider>
  );
};
