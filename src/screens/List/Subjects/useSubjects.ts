import { useEffect, useState } from 'react';

import { Options, requestAPI, Response } from '@services/index';
import { checkError } from '@utils/functions';
import useToggle from 'src/hooks/useToggle';

export const useSubjects = () => {
  const [open, setOpen] = useToggle();
  const [data, setData] = useState<any>([]);
  const [teachers, setTeachers] = useState([]);

  const getAllSubjects = async () => {
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

    setData(response?.data);
  };

  const getAllTeachers = async () => {
    const token = localStorage.getItem('token');

    const payload: Options = {
      method: 'GET',
      url: '/getUsers',
      headers: { Authorization: `Bearer ${token}` },
    };
    const { response }: Response = await requestAPI(payload);
    const error = checkError(response.status);
    if (error) {
      return;
    }

    const allTeachers = response?.data?.teachers?.filter(
      (teacher: any) => teacher?.usertype !== 'admin'
    );

    const value = allTeachers?.map((teacher: any) => {
      return {
        name: teacher.username,
        value: teacher?._id,
      };
    });
    setTeachers(value);
  };

  useEffect(() => {
    Promise.all([getAllSubjects(), getAllTeachers()]);
  }, []);

  return { open, setOpen, data, getAllSubjects, teachers };
};
