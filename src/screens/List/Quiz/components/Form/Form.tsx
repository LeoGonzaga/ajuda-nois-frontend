/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ActionButton from '@components/Buttons/ActionButton';
import EmptyState from '@components/EmptyState';
import Flex from '@components/Flex';
import TextInput from '@components/Inputs/TextInput';
import LoadingTable from '@components/LoadingTable';
import Select from '@components/Select';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { Options, requestAPI, Response } from '@services/index';
import { COLORS } from '@themes/colors';
import {
  checkError,
  openErrorNotification,
  openNotification,
} from '@utils/functions';
import { setNotification } from 'src/config/actions/notification';
import { useChangeText } from 'src/hooks/useChangeText';

import { Styles } from './styles';

export const Form = ({ onClose, reload, topics }: any): JSX.Element => {
  const dispatch = useDispatch();
  const [name, setName] = useChangeText('');
  const [topic, setTopic] = useState(topics[0]?.value);
  const [questions, setQuestions] = useState<any>([]);
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingTopic, setLoadingTopic] = useState(false);

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
    setLoadingTopic(true);
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
    setLoadingTopic(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
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
        name,
        topic_id: topic,
        questions_ids: selectedQuestions,
      },
    };
    const { response }: Response = await requestAPI(options);

    const error = checkError(response?.status);

    if (error) {
      dispatch(setNotification(openErrorNotification(response?.data?.error)));
      setLoading(false);
      return;
    }
    dispatch(setNotification(openNotification('Quiz criado com sucesso!')));
    await reload();
    onClose();
    setLoading(false);
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
              <div onClick={() => handleSelectedQuestions(element?._id)}>
                <input
                  type="checkbox"
                  checked={selectedQuestions.includes(element?._id)}
                />
                {element?.name}
              </div>
            </Styles.Row>
          ))}

        {loadingTopic && questions?.length === 0 && <LoadingTable />}
        {!loadingTopic && questions?.length === 0 && (
          <EmptyState text="Não há questões cadastradas para esse tópcio" />
        )}
      </Styles.List>
      <Spacing vertical={15} />
      <Flex width="19%">
        <ActionButton
          color={COLORS.SECONDARY}
          width="350px"
          onClick={handleSubmit}
          loading={loading}
          disabled={
            loading || selectedQuestions?.length === 0 || name?.length === 0
          }
        >
          Salvar
        </ActionButton>
        <Spacing vertical={5} />
      </Flex>
    </Styles.Container>
  );
};
