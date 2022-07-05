import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Options, Response, requestAPI } from '@services/index';
import { checkError } from '@utils/functions';
import { add } from 'src/config/actions/subjects';

const useSubject = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [allSubjects, setAllSubjects] = useState([]);
  const [activeArea, setActiveArea] = useState<string>('mathematics');
  const [activeSubject, setActiveSubject] = useState('');
  const [activeSubjectName, setActiveSubjectName] = useState('');
  const [loading, setLoading] = useState(false);
  const [permissions, setPermissions] = useState({
    natural_sciences: false,
    human_sciences: false,
    mathematics: false,
    languages: false,
  });

  const handleChangeActiveSubject = (id: string, name: string) => {
    setActiveSubject(id);
    setActiveSubjectName(name);
  };

  const handleToggleToShowContent = (value: string) => {
    setActiveArea(value);
    dispatch(add(value));
    setData([]);
  };

  const checkExistingSubject = (data) => {
    return data.length > 0;
  };

  const handleGetTeacherSubject = async () => {
    const token = localStorage.getItem('token');
    const payload: Options = {
      method: 'GET',
      url: '/getTeacher',
      headers: { Authorization: `Bearer ${token}` },
    };
    const { response }: Response = await requestAPI(payload);
    const error = checkError(response.status);

    const value = response?.data;
    console.log(response.data);
    setPermissions({
      human_sciences: checkExistingSubject(value?.human_sciences),
      languages: checkExistingSubject(value?.languages),
      mathematics: checkExistingSubject(value?.mathematics),
      natural_sciences: checkExistingSubject(value?.natural_sciences),
    });

    if (error) {
      return;
    }
  };

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
    const content = response?.data;
    setAllSubjects(content);
  };

  const getTopicBySubject = async () => {
    const token = localStorage.getItem('token');
    setLoading(true);
    const payload: Options = {
      method: 'POST',
      url: '/getTopicsBySubject',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        subject_id: activeSubject,
      },
    };
    const { response }: Response = await requestAPI(payload);

    setData(response?.data);
    setLoading(true);
  };

  useEffect(() => {
    handleGetTeacherSubject();
    getAll();
  }, []);

  useEffect(() => {
    getTopicBySubject();
  }, [activeSubject]);

  return {
    data,
    allSubjects,
    activeArea,
    handleToggleToShowContent,
    handleChangeActiveSubject,
    activeSubjectName,
    loading,
    permissions,
  };
};

export default useSubject;
