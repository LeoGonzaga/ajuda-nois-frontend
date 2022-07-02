import React, { useCallback, useEffect, useState } from 'react';

import { Options, Response, requestAPI } from '@services/index';
import { useRouter } from 'next/router';
import { ROUTES } from 'src/routes/routes';

const useQuiz = () => {
  const router = useRouter();
  const [lessonId, setLessonId] = useState<any>('');
  const [topicId, setTopicId] = useState('');
  const [data, setData] = useState<any>([]);
  const [topics, setTopics] = useState([]);
  const [expand, setExpand] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setExpand(!expand);
  }, [expand]);

  const handleRedirect = (id: string) => {
    router.replace('/view?id=' + id);
  };

  const getLesson = async () => {
    const token = localStorage.getItem('token');
    setData([]);
    setTopicId('');
    const payload: Options = {
      method: 'POST',
      url: '/getQuizzes',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        quiz_id: lessonId,
      },
    };
    const { response }: Response = await requestAPI(payload);

    const value = response?.data[0];
    if (value) {
      setData(value);
      setTopicId(value?.topic_id);
    }
  };

  useEffect(() => {
    const id = router.query.id;
    if (id) {
      setLessonId(id);
    } else {
      handleRedirect(ROUTES.SUBJECT);
    }
  }, [router]);

  useEffect(() => {
    if (lessonId) {
      getLesson();
    }
  }, [lessonId, router]);

  return { data, handleToggle, expand, topics, handleRedirect };
};

export default useQuiz;