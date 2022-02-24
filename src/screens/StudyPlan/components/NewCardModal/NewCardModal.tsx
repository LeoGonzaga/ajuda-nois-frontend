import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { BiError } from 'react-icons/bi';
import Modal from 'react-modal';

import Flex from '@components/Flex';
import Spacing from '@components/Spacing';

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
  onRequestClose: () => void;
  onHandleNewCard: (data: CardProps) => void;
};

export function NewCardModal({
  isOpen,
  onRequestClose,
  onHandleNewCard,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<CardProps>({
    defaultValues: {
      subject: 'Escolher...',
    },
  });

  const subjects = [
    'Biologia',
    'Espanhol',
    'Filosofia',
    'Física',
    'Química',
    'Geografia',
    'História',
    'Inglês',
    'Literatura',
    'Matemática',
    'Português',
    'Sociologia',
  ];

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
            >
              <option value="Escolher..." disabled hidden>
                Escolher...
              </option>
              {subjects.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Subject>
          <Topic showError={!!errors.topic}>
            <input
              type="text"
              id="topic"
              placeholder="Insira um tópico..."
              {...register('topic', { required: true })}
            />
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
          <button type="submit">Confirmar</button>
          <div onClick={onRequestClose}>Cancelar</div>
        </span>
      </Container>
    </Modal>
  );
}
