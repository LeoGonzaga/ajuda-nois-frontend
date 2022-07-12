import { useEffect, useState } from 'react';

import { Options, requestAPI, Response } from '@services/index';
import useToggle from 'src/hooks/useToggle';

export const useTopic = () => {
  const [open, setOpen] = useToggle();
  const [data, setData] = useState<any>([]);
  const [subjects, setSubjects] = useState([]);
  const [contentEditabled, setContentEditabled] = useState([]);
  const [onlySubject, setOnlySubject] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSelectedEditContent = (value: any) => {
    setContentEditabled(value);
    setOpen();
  };

  const getSubjects = async () => {
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

    const value = response.data;

    const mathematics = value.mathematics?.map((subjects: any) => {
      return {
        name: subjects.name,
        value: subjects._id,
      };
    });

    const languages = value.languages?.map((subjects: any) => {
      return {
        name: subjects.name,
        value: subjects._id,
      };
    });

    const human_sciences = value.human_sciences?.map((subjects: any) => {
      return {
        name: subjects.name,
        value: subjects._id,
      };
    });

    const natural_sciences = value.natural_sciences?.map((subjects: any) => {
      return {
        name: subjects.name,
        value: subjects._id,
      };
    });

    const allSubjects: any = [
      ...mathematics,
      ...human_sciences,
      ...natural_sciences,
      ...languages,
    ];

    setSubjects(allSubjects);
  };

  const getAll = async () => {
    setLoading(true);
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

    setData(response?.data);
    setLoading(false);
  };

  useEffect(() => {
    Promise.all([getAll(), getSubjects()]);
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
    subjects,
    contentEditabled,
    handleSelectedEditContent,
  };
};
