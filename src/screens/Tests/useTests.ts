import { useEffect, useState } from 'react';

import { requestAPI, Options, Response } from '@services/index';
import { checkError } from '@utils/functions';

const useTests = () => {
  const [data, setData] = useState([]);
  const [enabled, setEnabled] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAll = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    const payload: Options = {
      method: 'GET',
      url: '/getEnemsOrganized',
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

  return { data, loading, enabled };
};

export default useTests;
