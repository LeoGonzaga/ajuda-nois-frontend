import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import Flex from '@components/Flex';
import Spacing from '@components/Spacing';

import { Container } from './styles';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewCardModal({ isOpen, onRequestClose }: Props) {
  // const [startTime, setStartTime] = useState('');
  // const [endTime, setEndTime] = useState('');
  // const [subject, setSubject] = useState('');
  // const [topic, setTopic] = useState('');
  // const [info, setInfo] = useState('');
  // const [formData, setFormData] = useState({
  //   startTime: '',
  //   endTime: '',
  //   subject: '',
  //   topic: '',
  //   info: '',
  // });

  async function handleCreateNewJourney(event: FormEvent) {
    // const newFormData = formData;
    event.preventDefault();
    onRequestClose();
    // setStartTime(event.target.startTime.value);
    // setEndTime(event.target.endTime.value);
    // setSubject(event.target.subject.value);
    // setTopic(event.target.topic.value);
    // setInfo(event.target.info.value);

    // newFormData.startTime = startTime;
    // newFormData.endTime = endTime;
    // newFormData.subject = subject;
    // newFormData.topic = topic;
    // newFormData.info = info;

    // setFormData(newFormData);
  }

  return (
    <Modal
      closeTimeoutMS={300}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modalOverlay"
      className="modalContent"
    >
      <Container onSubmit={handleCreateNewJourney}>
        <Flex direction="horizontal" justify="space-between">
          <Flex align="center" justify="center">
            <label htmlFor="startTime">
              <strong>Início - </strong>
            </label>
            <input type="time" id="startTime" name="startTime" />
          </Flex>
          <div className="bar"></div>
          <Flex align="center" justify="center">
            <label htmlFor="endTime">
              <strong>Término - </strong>
            </label>
            <input type="time" id="endTime" name="endTime" />
          </Flex>
        </Flex>

        <Spacing vertical={10} />

        <Flex direction="horizontal" justify="space-between">
          <Flex align="center" justify="center">
            <label htmlFor="subject">
              <strong>Disciplina:</strong>
            </label>
            <select name="subject" id="subject">
              <option value="" disabled selected hidden>
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
              name="topic"
            />
          </Flex>
        </Flex>

        <Spacing vertical={10} />

        <div className="text-area-wrapper">
          <textarea
            name="info"
            id="info"
            rows={8}
            placeholder="Alguma nota ou comentário a adicionar para este card?"
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
