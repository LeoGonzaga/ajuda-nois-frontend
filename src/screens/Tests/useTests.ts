import { useEffect, useState } from 'react';

import { requestAPI, Options, Response } from '@services/index';
import { checkError } from '@utils/functions';

const useTests = () => {
  const [data, setData] = useState([]);
  const [initial, setInitial] = useState([]);
  const [enabled, setEnabled] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allYears, setAllYears] = useState<any>([]);
  const [selecteYear, setSelectedYear] = useState(0);

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
    setInitial(response?.data);
    setLoading(false);
  };

  const handleCreateEnemYears = () => {
    const atualYear = new Date().getFullYear();
    const FIRST_ENEM = 1999;
    const totalTests = atualYear - FIRST_ENEM;
    const arrayTests = [];

    for (let index = 0; index <= totalTests; index++) {
      const enem_year = atualYear - index;
      const payload = {
        value: enem_year,
        name: enem_year,
      };
      arrayTests.push(payload);
    }

    setAllYears(arrayTests);
  };

  useEffect(() => {
    getAll();
    handleCreateEnemYears();
  }, []);

  useEffect(() => {
    if (selecteYear > 0) {
      const filter = initial.filter((test: any) => test.year === selecteYear);
      setData(filter);
    }
  }, [selecteYear]);

  return { data, loading, enabled, allYears, setSelectedYear };
};

export default useTests;
