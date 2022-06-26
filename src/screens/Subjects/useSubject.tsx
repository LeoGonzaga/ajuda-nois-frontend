import React, { useEffect, useState } from 'react';

import { Options, Response, requestAPI } from '@services/index';

const useSubject = () => {
  const [data, setData] = useState([]);

  const getTopicBySubject = async () => {
    const token = localStorage.getItem('token');

    const payload: Options = {
      method: 'POST',
      url: '/getTopicsBySubject',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        subject_id: '62b103f3f8652036c554dd8a',
      },
    };
    const { response }: Response = await requestAPI(payload);

    setData(response?.data);
  };

  useEffect(() => {
    getTopicBySubject();
  }, []);

  return { data };
};

export default useSubject;
