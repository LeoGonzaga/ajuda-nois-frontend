import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Options, requestAPI, Response } from '@services/index';
import { checkError } from '@utils/functions';
import moment from 'moment';
import { RootState } from 'src/config/store';

type CardProps = {
  status: string;
  begin: string;
  end: string;
  subject: string;
  topic: string;
  text?: string;
};

const useStudyPlan = () => {
  const selectedDays = useSelector(
    (state: RootState) => state.calendar.selectedDays
  );
  const day = useSelector((state: RootState) => state.calendar.day);
  const [cards, setCards] = useState<any[]>([]);
  const [initial, setInitial] = useState<any[]>([]);
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
    setLoading(true);
    setCards([]);
    const token = localStorage.getItem('token');

    const start = moment(selectedDays[0]).format('YYYY-MM-DD');
    const end = moment(selectedDays[6]).format('YYYY-MM-DD');
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
      setLoading(false);
      return;
    }

    setCards(response?.data);
    setInitial(response?.data);
    setLoading(false);
  };

  useEffect(() => {
    getAllPlanByDays();
  }, [selectedDays]);

  useEffect(() => {
    getAllSubjects();
  }, []);

  useEffect(() => {
    if (day?.length > 0) {
      const card = initial?.filter((card) => card.date === day);
      setCards(card);
    }
  }, [day]);

  return { cards, subjects, getAllPlanByDays, loading };
};

export default useStudyPlan;
