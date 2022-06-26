import { useEffect, useState } from 'react';

import { Options, requestAPI, Response } from '@services/index';
import { checkError } from '@utils/functions';
import useToggle from 'src/hooks/useToggle';

export const useQuestions = () => {
  const [open, setOpen] = useToggle();
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

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
  }, []);

  return { open, setOpen, data, getAll, loading };
};
