// import { Container } from './styles';

import { useEffect, useState } from 'react';

import { Options, requestAPI, Response } from '@services/index';
import { checkError } from '@utils/functions';

const useDashBoard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getInfoByUserDashboard = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');

    const payload: Options = {
      method: 'POST',
      url: '/dashboard',
      headers: { Authorization: `Bearer ${token}` },
    };
    const { response }: Response = await requestAPI(payload);
    const check = checkError(response?.status);

    if (check) {
      return;
    }

    setData(response?.data);
    setLoading(false);
  };

  useEffect(() => {
    getInfoByUserDashboard();
  }, []);

  return { data, loading };
};
export default useDashBoard;
