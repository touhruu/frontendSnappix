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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { schema } from '../Schemas/CreateRegistrationSchemas';
import { IRegistrationData } from '../types/registration';

interface ISignUpProps {
  switchForm: () => void;
  onSignUpSubmit: (data: IRegistrationData) => void;
}

export const SignUp: FC<ISignUpProps> = memo(
  ({ switchForm, onSignUpSubmit }) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<IRegistrationData>({ resolver: schema });

    const onSubmit: SubmitHandler<IRegistrationData> = (data) => {
      onSignUpSubmit(data);
      console.log(data);
    };

    return (
      <Box
        boxShadow={3}
        sx={{ maxWidth: '400px', height: '100%', bgcolor: 'white' }}
      >
        <Box
          sx={{
            my: 2,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Регистрация
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
              error={!!errors.login}
              margin="normal"
              fullWidth
              id="login"
              label="Введите логин"
              autoComplete="login"
              autoFocus
              {...register('login')}
              helperText={errors.login?.message}
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
            >
              Регистрация
            </Button>
            <Box flexDirection={'column'}>
              <Box justifyContent={'center'} sx={{ width: '100%' }}>
                <Link href="#" variant="body2" textAlign={'center'}>
                  Забыли пароль?
                </Link>
              </Box>
              <Grid item>
                <Link href="#" variant="body2" onClick={switchForm}>
                  {'У уже есть учетная запись? Вход'}
                </Link>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  },
);
