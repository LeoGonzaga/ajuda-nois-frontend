import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import Flex from '@components/Flex';
import Spacing from '@components/Spacing';

import { Container } from './styles';

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
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [subject, setSubject] = useState('Escolher...');
  const [topic, setTopic] = useState('');
  const [text, setText] = useState('');

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

  function handleCreateNewCard(event: FormEvent) {
    event.preventDefault();
    const status = 'idle';
    const data = { status, startTime, endTime, subject, topic, text };
    onHandleNewCard(data);
    onRequestClose();
  }

  return (
    <Modal
      closeTimeoutMS={300}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modalOverlay"
      className="modalContent"
    >
      <Container onSubmit={handleCreateNewCard}>
        <Flex direction="horizontal" justify="space-between">
          <Flex align="center" justify="center">
            <label htmlFor="startTime">
              <strong>Início - </strong>
            </label>
            <input
              type="time"
              id="startTime"
              value={startTime}
              onChange={(event) => setStartTime(event.target.value)}
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
              value={endTime}
              onChange={(event) => setEndTime(event.target.value)}
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
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
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
          </Flex>
          <Flex align="center" justify="center">
            <label htmlFor="topic">
              <strong>Tópico: </strong>
            </label>
            <input
              type="text"
              id="topic"
              placeholder="Insira um tópico..."
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
            />
          </Flex>
        </Flex>

        <Spacing vertical={10} />

        <div className="text-area-wrapper">
          <textarea
            id="text"
            rows={8}
            placeholder="Alguma nota ou comentário a adicionar para este card?"
            value={text}
            onChange={(event) => setText(event.target.value)}
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
