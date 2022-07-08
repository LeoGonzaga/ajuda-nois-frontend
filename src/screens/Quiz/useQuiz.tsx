/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { Options, Response, requestAPI } from '@services/index';
import { handleRedirect } from '@utils/functions';
import { useRouter } from 'next/router';
import { ROUTES } from 'src/routes/routes';

const useQuiz = () => {
  const router = useRouter();
  const [quizId, setQuizId] = useState<any>('');
  const [data, setData] = useState<any>([]);
  const [expand, setExpand] = useState<boolean>(false);
  const [index, setIndex] = useState<any>('0');
  const [questions, setQuestons] = useState<any>([]);
  const [awnsers, setAwnsers] = useState([
    {
      check: false,
      value: '',
    },
    {
      check: false,
      value: '',
    },
    {
      check: false,
      value: '',
    },
    {
      check: false,
      value: '',
    },
    {
      check: false,
      value: '',
    },
  ]);

  const handleCheck = (index: number, value: string) => {
    const items = [...awnsers];
    const disabledCheck = items?.map((elem) => {
      return {
        check: false,
        value: elem.value,
      };
    });

    disabledCheck[index].check = true;
    disabledCheck[index].value = value;
    setAwnsers(disabledCheck);
  };

  const handleRedirectToIndex = (id: string, index: string) => {
    router.replace('/quiz?id=' + id + '&index=' + index);
  };

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
      setQuestons(value.questions_info);
    }
  };

  useEffect(() => {
    const id = router.query.id;
    const valueIndex = router.query.index;
    if (id) {
      setQuizId(id);
      setIndex(valueIndex);
    } else {
      handleRedirect(ROUTES.SUBJECT);
    }
  }, [router]);

  useEffect(() => {
    if (quizId) {
      getQuiz();
    }
  }, [quizId, router]);

  return {
    data,
    handleToggle,
    expand,
    handleRedirectToIndex,
    index,
    questions,
    handleCheck,
    awnsers,
  };
};

export default useQuiz;
