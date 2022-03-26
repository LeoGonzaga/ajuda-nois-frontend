import { useForm, SubmitHandler } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import Router from 'next/router';
import { ROUTES } from 'src/routes/routes';
import * as yup from 'yup';

type Inputs = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export const useFormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  //   Router.push(ROUTES.HOME);

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return { register, handleSubmit, onSubmit, errors };
};
