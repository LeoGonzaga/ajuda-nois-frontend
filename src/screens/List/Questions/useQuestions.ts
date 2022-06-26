import { useEffect, useState } from 'react';

import { Options, requestAPI, Response } from '@services/index';
import { checkError } from '@utils/functions';
import useToggle from 'src/hooks/useToggle';

export const useQuestions = () => {
  const [open, setOpen] = useToggle();
  const [data, setData] = useState<any>([]);
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);

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
      url: '/getQuestions',
      headers: { Authorization: `Bearer ${token}` },
    };
    const { response }: Response = await requestAPI(payload);
    const error = checkError(response.status);
    if (error) {
      return;
    }

    setData(response?.data);
    setLoading(false);
  };

  useEffect(() => {
    getAll();
    getTopics();
  }, []);

  return { open, setOpen, data, getAll, loading, topics };
};
