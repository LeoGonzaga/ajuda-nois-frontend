import { useCallback, useEffect, useState } from 'react';

import { Options, requestAPI, Response } from '@services/index';

export const useUsers = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);

  const handleToggleModalCreateUser = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  const getAllUser = async () => {
    const token = localStorage.getItem('token');
    console.log(token);
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
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return { openModal, handleToggleModalCreateUser, data, getAllUser };
};
