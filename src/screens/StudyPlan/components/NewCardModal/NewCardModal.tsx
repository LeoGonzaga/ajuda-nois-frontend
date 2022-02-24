import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { BiError } from 'react-icons/bi';
import Modal from 'react-modal';

import Flex from '@components/Flex';
import Spacing from '@components/Spacing';

import { Container, InputError } from './styles';

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
  } = useForm<CardProps>();

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
          <Flex direction="column" align="center" justify="flex-end">
            <Flex align="center" justify="center">
              <label htmlFor="startTime">
                <strong>Início - </strong>
              </label>
              <input
                type="time"
                id="startTime"
                {...register('startTime', { required: true })}
              />
            </Flex>
            {errors.startTime && (
              <InputError>
                <BiError size={15} />
                Insira um horário de início
              </InputError>
            )}
          </Flex>
          <div className="bar"></div>
          <Flex direction="column" align="center" justify="flex-end">
            <Flex align="center" justify="center">
              <label htmlFor="endTime">
                <strong>Término - </strong>
              </label>
              <input
                type="time"
                id="endTime"
                {...register('endTime', { required: true })}
              />
            </Flex>
            {errors.endTime && (
              <InputError>
                <BiError size={15} />
                Insira um horário de término
              </InputError>
            )}
          </Flex>
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
          <Flex direction="column" align="center" justify="flex-end">
            <Flex align="center" justify="center">
              <label htmlFor="subject">
                <strong>Disciplina:</strong>
              </label>
              <select
                id="subject"
                {...register('subject', {
                  validate: {
                    selected: (value) => value != 'Escolher...',
                  },
                })}
              >
                <option value="Escolher..." disabled selected hidden>
                  Escolher...
                </option>
                {subjects.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </Flex>
            {errors.subject && (
              <InputError>
                <BiError size={15} />
                Selecione uma matéria
              </InputError>
            )}
          </Flex>

          <Flex direction="column" align="center" justify="flex-end">
            <Flex align="center" justify="center">
              <label htmlFor="topic">
                <strong>Tópico: </strong>
              </label>
              <input
                type="text"
                id="topic"
                placeholder="Insira um tópico..."
                {...register('topic', { required: true })}
              />
            </Flex>
            {errors.topic && (
              <InputError>
                <BiError size={15} />
                Especifique um tópico
              </InputError>
            )}
          </Flex>
        </Flex>

        <Spacing vertical={10} />

        <div className="text-area-wrapper">
          <textarea
            id="text"
            rows={8}
            placeholder="Alguma nota ou comentário a adicionar para este card?"
            {...register('text')}
          />
        </div>

        <span>
          <button type="submit">Confirmar</button>
          <div onClick={onRequestClose}>Cancelar</div>
        </span>
      </Container>
    </Modal>
  );
}
