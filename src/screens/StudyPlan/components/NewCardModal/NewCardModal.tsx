import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { BiError } from 'react-icons/bi';
import Modal from 'react-modal';

import Flex from '@components/Flex';
import Spacing from '@components/Spacing';
import { Options, requestAPI, Response } from '@services/index';

import EndTime from './EndTime';
import StartTime from './StartTime';
import { Bar, Container, InputError, Wrapper } from './styles';
import Subject from './Subject';
import Topic from './Topic';

type CardProps = {
  status: string;
  startTime: string;
  endTime: string;
  subject: string;
  topic: string;
  text?: string;
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

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [topics, setTopics] = useState([]);
  const [activeSubject, setActiveSubject] = useState('');
  const [activeTopic, setActiveTopic] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<CardProps> = (data) => {
    data.status = 'idle';
    if (
      Number(data.startTime.replace(/:/g, '')) <
      Number(data.endTime.replace(/:/g, ''))
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

  useEffect(() => {
    const fecthData = async () => {
      await getTopicBySubject();
    };

    if (activeSubject?.length > 0) {
      fecthData();
    }
  }, [activeSubject]);

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
          <StartTime showError={!!errors.startTime}>
            <input
              type="time"
              id="startTime"
              {...register('startTime', { required: true })}
            />
          </StartTime>
          <Bar />
          <EndTime showError={!!errors.endTime}>
            <input
              type="time"
              id="endTime"
              {...register('endTime', { required: true })}
            />
          </EndTime>
        </Flex>

        {!!getValues('startTime') &&
          !!getValues('endTime') &&
          getValues('startTime') > getValues('endTime') && (
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
              {topics.map((item: any, index) => (
                <option key={index} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
          </Topic>
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
