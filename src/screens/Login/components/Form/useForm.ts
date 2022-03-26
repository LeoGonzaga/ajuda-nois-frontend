import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { requestAPI, Options } from '@services/index';
import { handleRedirect } from '@utils/functions';
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
    password: yup.string().min(6).required(),
  })
  .required();

export const useFormLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const handleCloseNotification = () => {
    setOpenNotification(false);
  };

  const handleRedirectUser = (type: string) => {
    const redirectByType: any = {
      admin: handleRedirect(ROUTES.ADMIN),
      teacher: handleRedirect(ROUTES.TEACHER),
      student: handleRedirect(ROUTES.HOME),
    };

    return redirectByType[type];
  };

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    setLoading(true);
    setOpenNotification(false);
    const payload: Options = {
      method: 'POST',
      url: 'login',
      data: {
        email,
        password,
      },
    };
    const { response, error } = await requestAPI(payload);
    console.log(response);
    if (error) {
      setMessage('Mensagem de erro');
      setLoading(false);
      return;
    }
    const token = response?.token;
    localStorage.setItem('token', token);
    const usertype = response?.user?.usertype;
    console.log(usertype);
    await handleRedirectUser(usertype);
    setOpenNotification(true);
    setLoading(false);
    // console.log(a);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    loading,
    message,
    openNotification,
    handleCloseNotification,
  };
};
