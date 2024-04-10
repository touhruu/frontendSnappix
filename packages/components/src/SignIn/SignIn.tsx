import { FC, memo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { IAuthData } from '../types/auth';
import { schema } from '../Schemas/CreateAuthSchemas';
import { theme } from '../theme';

interface ISignInProps {
  switchForm: () => void;
  onSignInSubmit: (data: IAuthData) => void;
}

export const SignIn: FC<ISignInProps> = memo(
  ({ switchForm, onSignInSubmit }) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<IAuthData>({ resolver: schema });

    const onSubmit: SubmitHandler<IAuthData> = (data) => {
      onSignInSubmit(data);
    };

    return (
      // <ThemeProvider theme={theme}>
      <Box
        boxShadow={3}
        sx={{ maxWidth: '400px', height: '100%', bgcolor: 'white' }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main', color: 'white' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Авторизация
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            <TextField
              error={!!errors.email}
              margin="normal"
              fullWidth
              id="email"
              label="Email адрес"
              autoComplete="email"
              autoFocus
              {...register('email')}
              helperText={errors.email?.message}
            />
            <TextField
              error={!!errors.password}
              margin="normal"
              fullWidth
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register('password')}
              helperText={errors.password?.message}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Запомнить меня"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              style={{ backgroundColor: theme.palette.primary.main }}
            >
              Войти
            </Button>
            <Box flexDirection={'column'}>
              <Box justifyContent={'center'} sx={{ width: '100%' }}>
                <Link href="#" variant="body2" textAlign={'center'}>
                  Забыли пароль?
                </Link>
              </Box>
              <Grid item>
                <Link href="#" variant="body2" onClick={switchForm}>
                  {'У вас нет учетной записи? Регистрация'}
                </Link>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
      // </ThemeProvider>
    );
  },
);
