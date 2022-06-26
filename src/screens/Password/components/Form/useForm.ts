import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';
import { requestAPI, Options } from '@services/index';
import { handleRedirect } from '@utils/functions';
import { useRouter } from 'next/router';
import { ROUTES } from 'src/routes/routes';
import * as yup from 'yup';
type Inputs = {
  confirm: string;
  password: string;
};

type Response = {
  response: any;
  error: boolean;
};
const schema = yup
  .object({
    password: yup.string().min(6).required(),
    confirm: yup.string().min(6).required(),
  })
  .required();

export const useFormLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<boolean>(false);
  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [verifyToken, setVerifyToken] = useState(false);
  const [userId, setUserId] = useState('');

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

  const onSubmit: SubmitHandler<Inputs> = async ({ password }) => {
    setLoading(true);
    setOpenNotification(false);
    setApiError(false);

    const payload: Options = {
      method: 'POST',
      url: '/changePassword',
      data: {
        new_password: password,
        user_id: userId,
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
    const user = response?.data?.user;
    localStorage.setItem('user', JSON.stringify(user));
    handleRedirect(ROUTES.LOGIN);
    setLoading(false);
  };

  const handleVerifyToken = async () => {
    const token = router?.query?.token;
    if (token === undefined) return;
    const payload: Options = {
      method: 'GET',
      url: `/changePassword/${token}`,
    };

    const { response }: Response = await requestAPI(payload);
    setVerifyToken(!!response?.data?.user);
    setUserId(response?.data?.user?._id);
  };

  useEffect(() => {
    if (router) {
      handleVerifyToken();
    }
  }, [router]);

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
    verifyToken,
  };
};
