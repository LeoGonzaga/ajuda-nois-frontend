import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { requestAPI, Options } from '@services/index';
import { handleRedirect } from '@utils/functions';
import { ROUTES } from 'src/routes/routes';
import * as yup from 'yup';

type Inputs = {
  email: string;
  password: string;
};

type Response = {
  response: any;
  error: boolean;
};
const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();

export const useFormLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<boolean>(false);
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
    const { response }: Response = await requestAPI(payload);
    if (response?.status > 300) {
      setMessage(response?.data?.message);
      setLoading(false);
      setApiError(true);
      setOpenNotification(true);
      return;
    }
    const token = response?.data?.token;
    localStorage.setItem('token', token);
    const usertype = response?.data?.user?.usertype;
    localStorage.setItem('usertype', usertype);

    setApiError(false);
    switch (usertype) {
      case 'admin':
        handleRedirect(ROUTES.ADMIN);
        break;
      case 'teacher':
        handleRedirect(ROUTES.TEACHER);
        break;
      case 'student':
        handleRedirect(ROUTES.HOME);
        break;

      default:
        break;
    }
    setLoading(false);
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
    apiError,
  };
};
