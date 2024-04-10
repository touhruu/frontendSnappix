import { FC, useCallback, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SignIn } from '../SignIn/SignIn';
import { IAuthData } from '../types/auth';
import { SignUp } from '../SignUp/SignUp';
import { IRegistrationData } from '../types/registration';

// const defaultTheme = createTheme();

interface IAuthFormProps {
  onSignInSubmit: (data: IAuthData) => void;
  onSignUpSubmit: (data: IRegistrationData) => void;
}

export const AuthForm: FC<IAuthFormProps> = ({
  onSignInSubmit,
  onSignUpSubmit,
}) => {
  const [openRegForm, setOpenRegForm] = useState(false);

  const openRegistrationForm = useCallback(() => {
    setOpenRegForm((prev) => !prev);
  }, []);

  return (
    // <ThemeProvider theme={defaultTheme}>
    <Box
      sx={{
        display: 'flex',
        marginTop: '50px',
        height: '550px',
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          width: '400px',
          height: '100%',
          backgroundColor: '#1d1d24',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {openRegForm ? (
        <SignUp
          switchForm={openRegistrationForm}
          onSignUpSubmit={onSignUpSubmit}
        />
      ) : (
        <SignIn
          switchForm={openRegistrationForm}
          onSignInSubmit={onSignInSubmit}
        />
      )}
    </Box>
    // </ThemeProvider>
  );
};
