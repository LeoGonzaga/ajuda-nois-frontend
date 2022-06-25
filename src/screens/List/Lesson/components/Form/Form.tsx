/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import ActionButton from '@components/Buttons/ActionButton';
import EditorContainer from '@components/Editor';
import Flex from '@components/Flex';
import TextInput from '@components/Inputs/TextInput';
import Select from '@components/Select';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { Options, requestAPI } from '@services/index';
import { COLORS } from '@themes/colors';
import { useChangeText } from 'src/hooks/useChangeText';

import { Styles } from './styles';

export const Form = ({ onClose, reload, topics }: any): JSX.Element => {
  const [username, setUsername] = useChangeText('');
  const [email, setEmail] = useChangeText('');
  const [subject, setSubject] = useState(topics[0]?.value);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    username: false,
    email: false,
  });

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (username.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        username: true,
      }));
    }

    const options: Options = {
      method: 'POST',
      url: '/createLesson',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        title: 'string',
        content: 'string - ara de conhecimento?',
        topic_id: 'string - verificar se é string mesmo',
      },
    };
    await requestAPI(options);
    await reload();
    onClose();
    setLoading(false);
  };

  const handleResetErrorInput = () => {
    if (email.length > 0) {
      setErrors((prevState) => ({
        ...prevState,
        email: false,
      }));
    }

    if (username.length > 0) {
      setErrors((prevState) => ({
        ...prevState,
        username: false,
      }));
    }
  };

  useEffect(() => {
    handleResetErrorInput();
  }, [email, username]);

  return (
    <Styles.Container>
      <TextInput
        width="350px"
        placeholder="Nome da lição"
        type="text"
        value={username}
        onChange={setUsername}
        error={errors.username}
      />
      <Spacing vertical={15} />
      <EditorContainer showControls />
      <Spacing vertical={15} />
      <Text>Associar a um tópico:</Text>
      <Spacing vertical={15} />
      <Select onChange={setSubject} value={subject} data={topics} />
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
