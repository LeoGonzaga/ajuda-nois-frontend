/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import ActionButton from '@components/Buttons/ActionButton';
import EmptyState from '@components/EmptyState';
import Flex from '@components/Flex';
import TextInput from '@components/Inputs/TextInput';
import Select from '@components/Select';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { Options, requestAPI, Response } from '@services/index';
import { COLORS } from '@themes/colors';
import { useChangeText } from 'src/hooks/useChangeText';

import { Styles } from './styles';

export const Form = ({ onClose, reload, topics }: any): JSX.Element => {
  const [name, setName] = useChangeText('');
  const [topic, setTopic] = useState(topics[0]?.value);
  const [questions, setQuestions] = useState<any>([]);
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);

  const [errors, setErrors] = useState({
    name: false,
  });

  const handleSelectedQuestions = (id: string) => {
    const array = [...selectedQuestions];
    const index = array.indexOf(id);
    index > -1 ? array.splice(index, 1) : array.push(id);
    setSelectedQuestions(array);
  };

  const getQuestionsByTopic = async (topicId: string) => {
    const token = localStorage.getItem('token');
    const options: Options = {
      method: 'POST',
      url: '/getQuestionsByTopic',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        topic_id: topicId,
      },
    };
    const { response }: Response = await requestAPI(options);
    setQuestions(response?.data);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (name.length > 0) {
      setErrors((prevState) => ({
        ...prevState,
        name: false,
      }));
    }

    const token = localStorage.getItem('token');
    const options: Options = {
      method: 'POST',
      url: '/createQuiz',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        name: 'string',
        subject_id: 'string - ara de conhecimento?',
        questions_ids: 'string - verificar se é string mesmo',
      },
    };
    const response = await requestAPI(options);
  };

  const handleResetErrorInput = () => {
    if (name.length > 0) {
      setErrors((prevState) => ({
        ...prevState,
        name: false,
      }));
    }
  };

  useEffect(() => {
    handleResetErrorInput();
  }, [name]);

  useEffect(() => {
    getQuestionsByTopic(topic);
  }, [topic]);

  return (
    <Styles.Container onSubmit={handleSubmit}>
      <TextInput
        width="100%"
        placeholder="Nome do quiz"
        type="text"
        value={name}
        onChange={setName}
        error={errors.name}
      />
      <Spacing vertical={15} />
      <Text>Associar ao tópico:</Text>
      <Spacing vertical={15} />
      <Select onChange={setTopic} value={topic} data={topics} />
      <Spacing vertical={15} />
      <Styles.List>
        {questions?.length > 0 &&
          questions?.map((element: any, index: number) => (
            <Styles.Row key={index}>
              <input
                type="checkbox"
                checked={selectedQuestions.includes(element?._id)}
                onChange={() => handleSelectedQuestions(element?._id)}
              />
              {element?.name}
            </Styles.Row>
          ))}

        {questions?.length === 0 && (
          <EmptyState text="Não há questões cadastradas para esse tópcio" />
        )}
      </Styles.List>
      <Spacing vertical={15} />
      <Flex width="19%">
        <ActionButton
          color={COLORS.SECONDARY}
          width="350px"
          onClick={handleSubmit}
        >
          Salvar
        </ActionButton>
        <Spacing vertical={5} />
      </Flex>
    </Styles.Container>
  );
};
