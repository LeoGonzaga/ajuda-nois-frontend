import React, { FormEvent, useState } from 'react';
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
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [subject, setSubject] = useState('Escolher...');
  const [topic, setTopic] = useState('');
  const [text, setText] = useState('');
  const [errors, setErrors] = useState({
    startTime: '',
    endTime: '',
    times: '',
    subject: '',
    topic: '',
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

  function handleValidation() {
    let formIsValid = true;
    const currentErrors = errors;

    if (!startTime) {
      formIsValid = false;
      currentErrors.startTime = 'Selecione um horário de início';
    } else {
      currentErrors.startTime = '';
    }

    if (!endTime) {
      formIsValid = false;
      currentErrors.endTime = 'Selecione um horário de término';
    } else {
      currentErrors.endTime = '';
    }

    if (subject === 'Escolher...') {
      formIsValid = false;
      currentErrors.subject = 'Selecione uma matéria';
    } else {
      currentErrors.subject = '';
    }

    if (!topic) {
      formIsValid = false;
      currentErrors.topic = 'Indique o tópico da matéria';
    } else {
      currentErrors.topic = '';
    }

    if (
      startTime &&
      endTime &&
      Number(startTime.replace(/:/g, '')) > Number(endTime.replace(/:/g, ''))
    ) {
      formIsValid = false;
      currentErrors.times =
        'O horário de início deve ser menor que o horário de término';
    } else {
      currentErrors.times = '';
    }

    setErrors(currentErrors);

    return formIsValid;
  }

  function handleCreateNewCard(event: FormEvent) {
    event.preventDefault();

    if (handleValidation()) {
      const status = 'idle';
      const data = { status, startTime, endTime, subject, topic, text };

      onHandleNewCard(data);

      setStartTime('');
      setEndTime('');
      setSubject('Escolher...');
      setTopic('');
      setText('');

      onRequestClose();
    }
    // setErrors({
    //   startTime: '',
    //   endTime: '',
    //   times: '',
    //   subject: '',
    //   topic: '',
    // });
  }

  function handleStartTimeChange(event: any) {
    setStartTime(event.target.value);
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
        <Flex direction="row" justify="space-between">
          <Flex direction="column" align="center" justify="flex-end">
            <Flex align="center" justify="center">
              <label htmlFor="startTime">
                <strong>Início - </strong>
              </label>
              <input
                type="time"
                id="startTime"
                value={startTime}
                onChange={handleStartTimeChange}
              />
            </Flex>
            <InputError>{errors.startTime}</InputError>
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
                value={endTime}
                onChange={(event) => setEndTime(event.target.value)}
              />
            </Flex>
            <InputError>{errors.endTime}</InputError>
          </Flex>
        </Flex>

        <Spacing vertical={10} />
        <InputError>{errors.times}</InputError>

        <Flex direction="row" justify="space-between">
          <Flex direction="column" align="center" justify="flex-end">
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
            <InputError>{errors.subject}</InputError>
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
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
              />
            </Flex>
            <InputError>{errors.topic}</InputError>
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
