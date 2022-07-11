import { useCallback, useEffect, useState } from 'react';

import { Options, requestAPI, Response } from '@services/index';
import useToggle from 'src/hooks/useToggle';

export const useLesson = () => {
  const [open, setOpen] = useToggle();
  const [data, setData] = useState<any>([]);
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [subjectsByTeacher, setSubjectsByTeacher] = useState<Array<string>>([]);
  const [contentEditabled, setContentEditabled] = useState([]);

  const handleSelectedEditContent = (value: any) => {
    setContentEditabled(value);
    setOpen();
  };

  const getTopics = async () => {
    const token = localStorage.getItem('token');

    const payload: Options = {
      method: 'GET',
      url: '/getTopics',
      headers: { Authorization: `Bearer ${token}` },
    };
    const { response }: Response = await requestAPI(payload);
    if (response?.status > 300) {
      return;
    }

    const value = response?.data?.map((subject: any) => {
      return {
        name: subject.name,
        value: subject?._id,
        id: subject?.subject_id,
      };
    });

    setTopics(value);
  };

  const getAll = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');

    const payload: Options = {
      method: 'GET',
      url: '/getLessons',
      headers: { Authorization: `Bearer ${token}` },
    };
    const { response }: Response = await requestAPI(payload);
    if (response?.status > 300) {
      return;
    }

    setData(response?.data);
    setLoading(false);
  };

  const getSUbjectsByUser = async () => {
    const token = localStorage.getItem('token');

    const payload: Options = {
      method: 'GET',
      url: '/getUser',
      headers: { Authorization: `Bearer ${token}` },
    };
    const { response }: Response = await requestAPI(payload);
    if (response?.status > 300) {
      return;
    }

    const value = response?.data;

    const mathematics = value.mathematics?.map((subjects: any) => {
      return {
        name: subjects.name,
        value: subjects?._id,
      };
    });

    const languages = value.languages?.map((subjects: any) => {
      return {
        name: subjects.name,
        value: subjects?._id,
      };
    });

    const human_sciences = value.human_sciences?.map((subjects: any) => {
      return {
        name: subjects.name,
        value: subjects?._id,
      };
    });

    const natural_sciences = value.natural_sciences?.map((subjects: any) => {
      return {
        name: subjects.name,
        value: subjects?._id,
      };
    });

    setSubjectsByTeacher([
      ...mathematics,
      ...languages,
      ...human_sciences,
      ...natural_sciences,
    ]);
  };

  useEffect(() => {
    Promise.all([getAll(), getTopics(), getSUbjectsByUser()]);
  }, []);

  useEffect(() => {
    if (!open) setContentEditabled([]);
  }, [open]);

  return {
    open,
    setOpen,
    data,
    getAll,
    setData,
    loading,
    topics,
    subjectsByTeacher,
    contentEditabled,
    handleSelectedEditContent,
  };
};
