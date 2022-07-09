import { useCallback, useState } from 'react';

import { Options, Response, requestAPI } from '@services/index';

const useSubjectItem = () => {
  const [data, setData] = useState([]);
  const [expand, setExpand] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setExpand(!expand);
  }, [expand]);

  const handleClose = () => {
    setExpand(false);
    setData([]);
  };

  const getLessonsByTopic = async (topic: number) => {
    const token = localStorage.getItem('token');

    const payload: Options = {
      method: 'POST',
      url: '/getContent',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        topic_id: topic,
      },
    };
    const { response }: Response = await requestAPI(payload);

    setData(response?.data);
  };

  return { data, getLessonsByTopic, handleToggle, expand, handleClose };
};

export default useSubjectItem;
