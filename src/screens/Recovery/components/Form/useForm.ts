import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';
import { requestAPI, Options } from '@services/index';
import { handleRedirect } from '@utils/functions';
import { setUserInfo } from 'src/config/actions/user';
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
  })
  .required();

export const useFormLogin = () => {
  const dispatch = useDispatch();
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

  const onSubmit: SubmitHandler<Inputs> = async ({ email }) => {
    setLoading(true);
    setOpenNotification(false);
    setApiError(false);

    const payload: Options = {
      method: 'POST',
      url: '/recoverPassword',
      data: {
        email,
      },
    };
    const { response }: Response = await requestAPI(payload);
    if (response?.status > 300) {
      setMessage(response?.data?.error);
      setLoading(false);
      setApiError(true);
      setOpenNotification(true);
      return;
    }

    setMessage(
      'Enviamos um email, da uma conferida lá pra gente poder continuar, ok?'
    );
    setApiError(false);
    setOpenNotification(true);

    setTimeout(() => {
      handleRedirect(ROUTES.LOGIN);
    }, 2000);
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
