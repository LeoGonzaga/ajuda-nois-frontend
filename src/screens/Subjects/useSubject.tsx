/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Options, Response, requestAPI } from '@services/index';
import { checkError } from '@utils/functions';
import { add } from 'src/config/actions/subjects';

const STUDENT = 'student';

const useSubject = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [allSubjects, setAllSubjects] = useState([]);
  const [activeArea, setActiveArea] = useState<string>('mathematics');
  const [activeSubject, setActiveSubject] = useState('');
  const [activeSubjectName, setActiveSubjectName] = useState('');
  const [subjectsByTeacher, setSubjectsByTeacher] = useState<Array<string>>([]);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState('');
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

  const checkExistingSubject = (data: any) => {
    return data?.length > 0;
  };

  const handleGetTeacherSubject = async () => {
    const token = localStorage.getItem('token');
    const payload: Options = {
      method: 'GET',
      url: '/getUser',
      headers: { Authorization: `Bearer ${token}` },
    };
    const { response }: Response = await requestAPI(payload);
    const error = checkError(response.status);

    const value = response?.data;

    if (error) {
      return;
    }

    setRole(value?.user?.usertype);
    if (value?.user?.usertype === STUDENT) {
      setPermissions({
        human_sciences: true,
        languages: true,
        mathematics: true,
        natural_sciences: true,
      });
    } else {
      const mathematics = value.mathematics?.map(
        (subjects: any) => subjects.name
      );
      const languages = value.languages?.map((subjects: any) => subjects.name);
      const human_sciences = value.human_sciences?.map(
        (subjects: any) => subjects.name
      );
      const natural_sciences = value.natural_sciences?.map(
        (subjects: any) => subjects.name
      );

      setPermissions({
        human_sciences: checkExistingSubject(value?.human_sciences),
        languages: checkExistingSubject(value?.languages),
        mathematics: checkExistingSubject(value?.mathematics),
        natural_sciences: checkExistingSubject(value?.natural_sciences),
      });

      setSubjectsByTeacher([
        ...mathematics,
        ...languages,
        ...human_sciences,
        ...natural_sciences,
      ]);
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
    setLoading(false);
  };

  useEffect(() => {
    Promise.all([handleGetTeacherSubject(), getAll()]);
  }, []);

  useEffect(() => {
    if (activeSubject !== '') getTopicBySubject();
  }, [activeSubject]);

  console.log(subjectsByTeacher);

  return {
    data,
    allSubjects,
    activeArea,
    handleToggleToShowContent,
    handleChangeActiveSubject,
    activeSubjectName,
    loading,
    permissions,
    subjectsByTeacher,
    role,
  };
};

export default useSubject;
