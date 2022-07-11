import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { BiError } from 'react-icons/bi';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';

import Flex from '@components/Flex';
import Spacing from '@components/Spacing';
import { Options, requestAPI, Response } from '@services/index';
import moment from 'moment';
import { RootState } from 'src/config/store';

import EndTime from './EndTime';
import StartTime from './StartTime';
import { Bar, Container, InputError, Wrapper } from './styles';
import Subject from './Subject';
import Topic from './Topic';

type CardProps = {
  status: string;
  begin: string;
  end: string;
  subject: string;
  topic: string;
  text?: string;
  date: string;
};

type Props = {
  isOpen: boolean;
  subjects: Array<any>;
  onRequestClose: () => void;
  onHandleNewCard: (data: CardProps) => void;
};

export function NewCardModal({
  isOpen,
  onRequestClose,
  onHandleNewCard,
  subjects,
}: Props): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<CardProps>({
    defaultValues: {
      subject: 'Escolher...',
      topic: 'Escolher...',
    },
  });

  const selectedDays = useSelector(
    (state: RootState) => state.calendar.selectedDays
  );
  const [topics, setTopics] = useState([]);
  const [activeSubject, setActiveSubject] = useState('');
  const [activeTopic, setActiveTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [dates, setDates] = useState<any>([]);

  const onSubmit: SubmitHandler<CardProps> = (data) => {
    data.status = 'idle';
    if (
      Number(data.begin.replace(/:/g, '')) < Number(data.end.replace(/:/g, ''))
    ) {
      onHandleNewCard(data);
      onRequestClose();
    }
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

    setTopics(response?.data);
    setActiveTopic(response?.data[0]?._id);
    setLoading(false);
  };

  const handleFormatDates = () => {
    if (selectedDays?.length > 0) {
      const array = selectedDays?.map((elem) => {
        return {
          name: moment(elem).format('ddd'),
          value: moment(elem).format('YYYY-MM-DD'),
        };
      });
      setDates(array);
      console.log(array);
    }
  };

  useEffect(() => {
    const fecthData = async () => {
      await getTopicBySubject();
    };

    if (activeSubject?.length > 0) {
      fecthData();
    }
  }, [activeSubject]);

  useEffect(() => {
    handleFormatDates();
  }, [selectedDays]);

  return (
    <Modal
      closeTimeoutMS={300}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modalOverlay"
      className="modalContent"
    >
      <Container onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="row" justify="space-between">
          <StartTime showError={!!errors.begin}>
            <input
              type="time"
              id="startTime"
              {...register('begin', { required: true })}
            />
          </StartTime>
          <Bar />
          <EndTime showError={!!errors.end}>
            <input
              type="time"
              id="endTime"
              {...register('end', { required: true })}
            />
          </EndTime>
        </Flex>

        {!!getValues('begin') &&
          !!getValues('end') &&
          getValues('begin') > getValues('end') && (
            <InputError>
              <BiError size={15} />O horário de início deve ser inferior ao
              horário de término
            </InputError>
          )}
        <Spacing vertical={10} />

        <Flex direction="row" justify="space-between">
          <Subject showError={!!errors.subject}>
            <select
              id="subject"
              {...register('subject', {
                validate: {
                  selected: (value) => value != 'Escolher...',
                },
              })}
              onChange={(e) => setActiveSubject(e.target.value)}
            >
              <option value="Escolher..." disabled hidden>
                Escolher...
              </option>
              {subjects.map((item, index) => (
                <option key={index} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
          </Subject>
          <Topic showError={!!errors.topic}>
            <select
              id="topic"
              {...register('topic', {
                validate: {
                  topic: (value) => value != 'Escolher...',
                },
                required: true,
              })}
              value={activeTopic}
              onChange={(e) => setActiveTopic(e.target.value)}
            >
              <option value="Escolher..." disabled hidden>
                Escolher...
              </option>
              {topics?.length > 0 &&
                topics?.map((item: any, index) => (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </Topic>
        </Flex>

        <Spacing vertical={10} />
        <Flex direction="row" justify="flex-start">
          <select
            id="date"
            {...register('date', {
              validate: {
                date: (value) => value != 'Escolher...',
              },
            })}
            onChange={(e) => setActiveSubject(e.target.value)}
          >
            <option value="Escolher..." disabled hidden>
              Escolher...
            </option>
            {dates?.length &&
              dates?.map((item: any, index: number) => (
                <option key={index} value={item?.value}>
                  {item?.name}
                </option>
              ))}
          </select>
        </Flex>
        <Spacing vertical={10} />
        <Wrapper>
          <textarea
            id="text"
            rows={8}
            placeholder="Alguma nota ou comentário a adicionar para este card?"
            {...register('text')}
          />
        </Wrapper>

        <span>
          {!loading && <button type="submit">Confirmar</button>}
          <div onClick={onRequestClose}>Cancelar</div>
        </span>
      </Container>
    </Modal>
  );
}
