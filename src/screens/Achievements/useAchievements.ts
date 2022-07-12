import { useEffect, useState } from 'react';

import { requestAPI, Options, Response } from '@services/index';
import { checkError } from '@utils/functions';

const useAchievements = () => {
  const [data, setData] = useState([]);
  const [enabled, setEnabled] = useState([]);
  const [loading, setLoading] = useState(false);
  const [level, setLevel] = useState({
    level: 0,
    experience: 0,
  });

  const getAll = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    const payload: Options = {
      method: 'GET',
      url: '/getAchievements',
      headers: { Authorization: `Bearer ${token}` },
    };
    const { response }: Response = await requestAPI(payload);
    const error = checkError(response.status);
    if (error) {
      return;
    }

    const allAchievements = response?.data?.achievement;
    const enabledAchievements = response?.data?.user?.achievements?.map(
      (achievement: any) => achievement.achievement_id
    );

    setEnabled(enabledAchievements);
    setData(allAchievements);
    setLevel({
      level: response?.data?.user?.level,
      experience: response?.data?.user?.experience,
    });
    setLoading(false);
  };

  useEffect(() => {
    getAll();
  }, []);

  return { data, loading, enabled, level };
};

export default useAchievements;
