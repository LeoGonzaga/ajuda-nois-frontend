/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';

import { Options, Response, requestAPI } from '@services/index';
import { useRouter } from 'next/router';
import { ROUTES } from 'src/routes/routes';

const useSubjectContent = () => {
  const router = useRouter();
  const [lessonId, setLessonId] = useState<any>('');
  const [topicId, setTopicId] = useState('');
  const [data, setData] = useState<any>([]);
  const [topics, setTopics] = useState([]);
  const [expand, setExpand] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [area, setArea] = useState<string>('');

  const handleToggle = useCallback(() => {
    setExpand(!expand);
  }, [expand]);

  const handleRedirect = (id: string) => {
    router.replace('/view?id=' + id);
  };

  const lessonViewed = async () => {
    const token = localStorage.getItem('token');

    const payload: Options = {
      method: 'POST',
      url: '/lessonViewned',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        lesson_id: lessonId,
      },
    };
    await requestAPI(payload);
  };

  const getTopicBySubject = async () => {
    const token = localStorage.getItem('token');

    const payload: Options = {
      method: 'POST',
      url: '/getContent',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        topic_id: topicId,
      },
    };
    const { response }: Response = await requestAPI(payload);
    setTopics(response?.data[0]?.lessons);
    setArea(response?.data[0]?.subject_info?.area);
  };

  const getLesson = async () => {
    const token = localStorage.getItem('token');
    setLoading(true);
    setData([]);
    setTopicId('');
    const payload: Options = {
      method: 'POST',
      url: '/getLesson',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        lesson_id: lessonId,
      },
    };
    const { response }: Response = await requestAPI(payload);

    const value = response?.data[0];
    if (value) {
      setData(value);
      setTopicId(value?.topic_id);
    }

    setLoading(false);
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
      lessonViewed();
    }
  }, [lessonId, router]);

  useEffect(() => {
    if (topicId) {
      getTopicBySubject();
    }
  }, [topicId]);

  return { data, handleToggle, expand, loading, topics, handleRedirect, area };
};

export default useSubjectContent;
