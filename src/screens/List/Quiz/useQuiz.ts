import { useCallback, useEffect, useState } from 'react';

import { Options, requestAPI, Response } from '@services/index';

export const useQuiz = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleToggleModal = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  const getTopics = async () => {
    const token = localStorage.getItem('token');

    const payload: Options = {
      method: 'GET',
      url: '/getTopics',
      headers: { Authorization: `Bearer ${token}` },
    };
    const { response }: Response = await requestAPI(payload);
    if (response?.status > 300) {
      return;
    }

    const value = response?.data?.map((subject: any) => {
      return {
        name: subject.name,
        value: subject?._id,
      };
    });

    setTopics(value);
  };

  const getAll = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');

    const payload: Options = {
      method: 'GET',
      url: '/getQuizes',
      headers: { Authorization: `Bearer ${token}` },
    };
    const { response }: Response = await requestAPI(payload);
    if (response?.status > 300) {
      return;
    }

    setData(response?.data);
    setLoading(false);
  };

  useEffect(() => {
    Promise.all([getAll(), getTopics()]);
  }, []);

  return {
    openModal,
    handleToggleModal,
    data,
    getAll,
    setData,
    loading,
    topics,
  };
};
