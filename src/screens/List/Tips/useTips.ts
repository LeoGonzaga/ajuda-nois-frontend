import { useEffect, useState } from 'react';

import { Options, requestAPI, Response } from '@services/index';
import { checkError } from '@utils/functions';
import useToggle from 'src/hooks/useToggle';

export const useTips = () => {
  const [open, setOpen] = useToggle();
  const [data, setData] = useState<any>([]);
  const [contentEditabled, setContentEditabled] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSelectedEditContent = (value: any) => {
    setContentEditabled(value);
    setOpen();
  };

  const getAll = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    const payload: Options = {
      method: 'GET',
      url: '/getTips',
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

  useEffect(() => {
    if (!open) setContentEditabled([]);
  }, [open]);

  return {
    open,
    setOpen,
    data,
    getAll,
    loading,
    contentEditabled,
    handleSelectedEditContent,
  };
};
