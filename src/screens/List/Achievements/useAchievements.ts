import { useEffect, useState } from 'react';

import { Options, requestAPI, Response } from '@services/index';
import { checkError } from '@utils/functions';
import useToggle from 'src/hooks/useToggle';

export const useAchievements = () => {
  const [open, setOpen] = useToggle();
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const getAllAchievements = async () => {
    setLoading(true);
    const token = await localStorage.getItem('token');
    const payload: Options = {
      method: 'GET',
      url: '/getAchievements',
      headers: { Authorization: `Bearer ${token}` },
    };
    const { response }: Response = await requestAPI(payload);
    const error = checkError(response.status);
    if (error) {
      return;
    }

    setData(response?.data?.achievement);
    setLoading(false);
  };

  useEffect(() => {
    getAllAchievements();
  }, []);

  return { open, setOpen, data, getAllAchievements, loading };
};
