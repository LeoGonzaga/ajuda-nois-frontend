import { useCallback, useEffect, useState } from 'react';

import { Options, requestAPI, Response } from '@services/index';

export const useEnem = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const handleToggleModal = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  const getAll = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');

    const payload: Options = {
      method: 'GET',
      url: '/getEnems',
      headers: { Authorization: `Bearer ${token}` },
    };
    const { response }: Response = await requestAPI(payload);
    if (response?.status > 300) {
      return;
    }

    setData(response?.data);
    setLoading(false);
    return response?.data;
  };

  useEffect(() => {
    getAll();
  }, []);

  return {
    openModal,
    handleToggleModal,
    data,
    getAll,
    setData,
    loading,
  };
};
