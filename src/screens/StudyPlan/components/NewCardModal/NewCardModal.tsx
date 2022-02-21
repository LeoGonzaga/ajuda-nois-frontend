import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Modal from 'react-modal';

import Flex from '@components/Flex';
import Spacing from '@components/Spacing';

import { Container } from './styles';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
};

type FormData = {
  startTime: string;
  endTime: string;
  subject: string;
  topic: string;
  info: string;
};

export function NewCardModal({ isOpen, onRequestClose }: Props) {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log(data);
    onRequestClose();
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
        <Flex direction="horizontal" justify="space-between">
          <Flex align="center" justify="center">
            <label htmlFor="startTime">
              <strong>Início - </strong>
            </label>
            <input
              type="time"
              id="startTime"
              {...register('startTime', {
                required: {
                  value: true,
                  message: 'Insira um horário de início!',
                },
              })}
            />
          </Flex>
          <div className="bar"></div>
          <Flex align="center" justify="center">
            <label htmlFor="endTime">
              <strong>Término - </strong>
            </label>
            <input
              type="time"
              id="endTime"
              {...register('endTime', {
                required: {
                  value: true,
                  message: 'Insira um horário de término!',
                },
              })}
            />
          </Flex>
        </Flex>

        <Spacing vertical={10} />

        <Flex direction="horizontal" justify="space-between">
          <Flex align="center" justify="center">
            <label htmlFor="subject">
              <strong>Disciplina:</strong>
            </label>
            <select
              id="subject"
              {...register('subject', {
                required: true,
                validate: (value) =>
                  value !== 'Escolher...' || 'Seleciona uma matéria!',
              })}
            >
              <option value="Escolher..." disabled selected hidden>
                Escolher...
              </option>
              <option value="Biologia">Biologia</option>
              <option value="Espanhol">Espanhol</option>
              <option value="Filosofia">Filosofia</option>
              <option value="Fisica">Física</option>
              <option value="Quimica">Química</option>
              <option value="Geografia">Geografia</option>
              <option value="Historia">História</option>
              <option value="Ingles">Inglês</option>
              <option value="Literatura">Literatura</option>
              <option value="Matematica">Matemática</option>
              <option value="Portugues">Português</option>
              <option value="Sociologia">Sociologia</option>
            </select>
          </Flex>
          <Flex align="center" justify="center">
            <label htmlFor="topic">
              <strong>Tópico: </strong>
            </label>
            <input
              type="text"
              id="topic"
              placeholder="Insira um tópico..."
              {...register('topic', {
                required: {
                  value: true,
                  message: 'Insira um tópico para estudar!',
                },
              })}
            />
          </Flex>
        </Flex>

        <Spacing vertical={10} />

        <div className="text-area-wrapper">
          <textarea
            id="info"
            rows={8}
            placeholder="Alguma nota ou comentário a adicionar para este card?"
            {...register('info')}
          ></textarea>
        </div>

        <span>
          <button type="submit">Confirmar</button>
          <div onClick={onRequestClose}>Cancelar</div>
        </span>
      </Container>
    </Modal>
  );
}
