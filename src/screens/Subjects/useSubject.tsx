import React, { useEffect, useState } from 'react';

import { Options, Response, requestAPI } from '@services/index';
import { checkError } from '@utils/functions';

const useSubject = () => {
  const [data, setData] = useState([]);
  const [allSubjects, setAllSubjects] = useState([]);

  const getAll = async () => {
    const token = localStorage.getItem('token');
    const payload: Options = {
      method: 'GET',
      url: '/getSubjects',
      headers: { Authorization: `Bearer ${token}` },
    };
    const { response }: Response = await requestAPI(payload);
    const error = checkError(response.status);
    if (error) {
      return;
    }

    setAllSubjects(response?.data);
  };

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
    getAll();
    getTopicBySubject();
  }, []);

  return { data, allSubjects };
};

export default useSubject;
