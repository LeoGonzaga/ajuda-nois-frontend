/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import ActionButton from '@components/Buttons/ActionButton';
import Flex from '@components/Flex';
import TextInput from '@components/Inputs/TextInput';
import Spacing from '@components/Spacing';
import { Options, requestAPI } from '@services/index';
import { COLORS } from '@themes/colors';
import { useChangeText } from 'src/hooks/useChangeText';

import { Styles } from './styles';

export const Form = ({ onClose, reload }: any): JSX.Element => {
  const [topic, setTopic] = useChangeText('');
  const [information, setInformation] = useChangeText('');
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    topic: false,
    information: false,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem('token');

    if (topic.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        topic: true,
      }));
    }

    if (information.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        information: true,
      }));
    }

    const options: Options = {
      method: 'POST',
      url: '/createTip',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        name: topic,
        information,
      },
    };
    await requestAPI(options);
    reload();
    onClose();
    setLoading(false);
  };

  const handleResetErrorInput = () => {
    if (topic.length > 0) {
      setErrors((prevState) => ({
        ...prevState,
        topic: false,
      }));
    }

    if (information.length > 0) {
      setErrors((prevState) => ({
        ...prevState,
        information: false,
      }));
    }
  };

  useEffect(() => {
    handleResetErrorInput();
  }, [topic, information]);

  return (
    <Styles.Container onSubmit={handleSubmit}>
      <TextInput
        width="350px"
        placeholder="Nome da dica"
        type="text"
        value={topic}
        onChange={setTopic}
        error={errors.topic}
      />
      <Spacing vertical={15} />
      <textarea
        placeholder="Descrição"
        value={information}
        onChange={setInformation}
      />
      <Spacing vertical={15} />
      <Flex width="19%">
        <ActionButton
          color={COLORS.SECONDARY}
          width="350px"
          onClick={handleSubmit}
          loading={loading}
          disabled={loading}
        >
          Salvar
        </ActionButton>
        <Spacing vertical={5} />
      </Flex>
    </Styles.Container>
  );
};
