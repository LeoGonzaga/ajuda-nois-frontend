import { useCallback, useEffect, useState } from 'react';

import { Options, requestAPI, Response } from '@services/index';

export const useUsers = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const handleToggleModalCreateUser = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  const getAllUser = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');

    const payload: Options = {
      method: 'GET',
      url: '/getUsers',
      headers: { Authorization: `Bearer ${token}` },
    };
    const { response }: Response = await requestAPI(payload);
    if (response?.status > 300) {
      return;
    }

    const allUsers = [...response.data.students, ...response.data.teachers];

    setData(allUsers);
    setLoading(false);
    return allUsers;
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return {
    openModal,
    handleToggleModalCreateUser,
    data,
    getAllUser,
    setData,
    loading,
  };
};
