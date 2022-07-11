import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Options, requestAPI, Response } from '@services/index';
import { checkError } from '@utils/functions';
import moment from 'moment';
import { RootState } from 'src/config/store';

type CardProps = {
  status: string;
  startTime: string;
  endTime: string;
  subject: string;
  topic: string;
  text?: string;
};

const useStudyPlan = () => {
  const selectedDays = useSelector((state: RootState) => state.calendar);
  const [cards, setCards] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState([]);

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
    const content = response?.data;
    setSubjects(content);
  };

  const getAllPlanByDays = async () => {
    const token = localStorage.getItem('token');

    const start = moment(selectedDays.selectedDays[0]).format('YYYY-MM-DD');
    const end = moment(selectedDays.selectedDays[6]).format('YYYY-MM-DD');
    const payload: Options = {
      method: 'POST',
      url: '/getStudyPlans',
      data: {
        begin: start,
        end: end,
      },
      headers: { Authorization: `Bearer ${token}` },
    };
    const { response }: Response = await requestAPI(payload);
    const error = checkError(response.status);
    if (error) {
      return;
    }

    setCards(response?.data);
  };

  useEffect(() => {
    getAllPlanByDays();
  }, [selectedDays]);

  useEffect(() => {
    getAllSubjects();
  }, []);

  return { cards, subjects, getAllPlanByDays };
};

export default useStudyPlan;
