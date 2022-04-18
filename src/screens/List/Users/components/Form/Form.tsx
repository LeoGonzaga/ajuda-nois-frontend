/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import ActionButton from '@components/Buttons/ActionButton';
import Flex from '@components/Flex';
import TextInput from '@components/Inputs/TextInput';
import Select from '@components/Select';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { Options, requestAPI, Response } from '@services/index';
import { COLORS } from '@themes/colors';
import { checkError } from '@utils/functions';
import { useChangeText } from 'src/hooks/useChangeText';

import { Styles } from './styles';

const data = [
  {
    value: 'teacher',
    name: 'Professor',
  },
  {
    value: 'student',
    name: 'Aluno',
  },
  {
    value: 'admin',
    name: 'Administrador',
  },
];

type Props = {
  onClose: () => void;
  reload: () => void;
};

export const Form = ({ onClose, reload }: Props): JSX.Element => {
  const [username, setUsername] = useChangeText('');
  const [email, setEmail] = useChangeText('');
  const [usertype, setUserType] = useState<string>('student');
  const [loading, setLoading] = useState<boolean>(false);

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
    setLoading(true);
    const token = localStorage.getItem('token');
    const validEmail = validateEmail(email);

    if (email.length === 0 || !validEmail) {
      setErrors((prevState) => ({
        ...prevState,
        email: true,
      }));
    }

    if (username.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        username: true,
      }));
    }

    const options: Options = {
      method: 'POST',
      url: '/createUser',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        username,
        email,
        password: '123456',
        usertype,
      },
    };
    const { response }: Response = await requestAPI(options);

    checkError(response?.status);
    setLoading(false);
    reload();
    onClose();
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
    <Styles.Container onSubmit={handleSubmit}>
      <TextInput
        width="350px"
        placeholder="Nome completo"
        type="text"
        value={username}
        onChange={setUsername}
        error={errors.username}
      />
      <Spacing vertical={15} />
      <TextInput
        width="350px"
        placeholder="Email"
        type="email"
        value={email}
        onChange={setEmail}
        error={errors.email}
      />
      <Spacing vertical={15} />

      <Text>Tipo de usuário:</Text>
      <Spacing vertical={15} />
      <Select onChange={setUserType} value={usertype} data={data} />
      <Spacing vertical={15} />
      <Flex width="19%">
        <ActionButton
          color={COLORS.SECONDARY}
          width="350px"
          onClick={handleSubmit}
          disabled={loading}
          loading={loading}
        >
          Salvar
        </ActionButton>
        <Spacing vertical={5} />
      </Flex>
    </Styles.Container>
  );
};
