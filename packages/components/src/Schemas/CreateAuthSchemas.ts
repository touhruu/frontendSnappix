import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const schema = yupResolver(
  yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  }),
);
