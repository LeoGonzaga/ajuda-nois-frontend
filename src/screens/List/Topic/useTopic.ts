import { useCallback, useEffect, useState } from 'react';

import { Options, requestAPI, Response } from '@services/index';

export const useTopic = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleToggleModal = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  const getSubjects = async () => {
    const token = localStorage.getItem('token');

    const payload: Options = {
      method: 'GET',
      url: '/getSubjects',
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

    setSubjects(value);
  };

  const getAll = async () => {
    setLoading(true);
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

    setData(response?.data);
    setLoading(false);
  };

  useEffect(() => {
    Promise.all([getAll(), getSubjects()]);
  }, []);

  return {
    openModal,
    handleToggleModal,
    data,
    getAll,
    setData,
    loading,
    subjects,
  };
};
