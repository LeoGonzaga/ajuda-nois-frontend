import { useCallback, useState } from 'react';

import { Options, requestAPI, Response } from '@services/index';

export const useUsers = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const [ĺoading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const handleToggleModalCreateUser = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  const getAllUser = async () => {
    const payload: Options = {
      method: 'GET',
      url: 'alterarurl',
    };
    const { response }: Response = await requestAPI(payload);
    if (response?.status > 300) {
      setMessage(response?.data?.message);
      setLoading(false);
      setError(true);
      setOpenNotification(true);
      return;
    }
  };
  return { openModal, handleToggleModalCreateUser };
};
