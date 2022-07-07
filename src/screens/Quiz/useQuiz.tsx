import React, { useCallback, useEffect, useState } from 'react';

import { Options, Response, requestAPI } from '@services/index';
import { handleRedirect } from '@utils/functions';
import { useRouter } from 'next/router';
import { ROUTES } from 'src/routes/routes';

const useQuiz = () => {
  const router = useRouter();
  const [quizId, setQuizId] = useState<any>('');
  const [data, setData] = useState<any>([]);
  const [expand, setExpand] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setExpand(!expand);
  }, [expand]);

  const getQuiz = async () => {
    const token = localStorage.getItem('token');
    setData([]);
    const payload: Options = {
      method: 'POST',
      url: '/getQuiz',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        quiz_id: quizId,
      },
    };
    const { response }: Response = await requestAPI(payload);

    const value = response?.data;
    if (value) {
      setData(value);
    }
  };

  useEffect(() => {
    const id = router.query.id;
    if (id) {
      setQuizId(id);
    } else {
      handleRedirect(ROUTES.SUBJECT);
    }
  }, [router]);

  useEffect(() => {
    if (quizId) {
      getQuiz();
    }
  }, [quizId, router]);

  return { data, handleToggle, expand, handleRedirect };
};

export default useQuiz;
