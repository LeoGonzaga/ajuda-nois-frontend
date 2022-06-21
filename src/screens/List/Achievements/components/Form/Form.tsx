/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import ActionButton from '@components/Buttons/ActionButton';
import Flex from '@components/Flex';
import TextInput from '@components/Inputs/TextInput';
import Select from '@components/Select';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { Options, requestAPI } from '@services/index';
import { COLORS } from '@themes/colors';
import { useChangeText } from 'src/hooks/useChangeText';

import { Styles } from './styles';

const data = [
  {
    value: 'teacher',
    name: 'Professor',
  },
  {
    value: 'user',
    name: 'Aluno',
  },
  {
    value: 'admin',
    name: 'Administrador',
  },
];

export const Form = (): JSX.Element => {
  const [name, setName] = useChangeText('');
  const [descriptions, setDescription] = useChangeText('');
  const [usertype, setUserType] = useState<string>('');

  const [errors, setErrors] = useState({
    name: false,
    description: false,
    icon_base64: false,
    experience: false,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const token = await localStorage.getItem('token');

    if (name.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        name: true,
      }));
    }

    const options: Options = {
      method: 'POST',
      url: '/createAchievement',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        icon_base64: '',
        name: 'string',
        description: 'string - ara de conhecimento?',
        experience: 'string - verificar se é string mesmo',
      },
    };
    const response = await requestAPI(options);
    console.log(response);
  };

  const handleResetErrorInput = () => {
    if (descriptions.length > 0) {
      setErrors((prevState) => ({
        ...prevState,
        descriptions: false,
      }));
    }

    if (name.length > 0) {
      setErrors((prevState) => ({
        ...prevState,
        name: false,
      }));
    }
  };

  useEffect(() => {
    handleResetErrorInput();
  }, [name, descriptions]);

  return (
    <Styles.Container onSubmit={handleSubmit}>
      <TextInput
        width="350px"
        placeholder="Nome da conquista"
        type="text"
        value={name}
        onChange={setName}
        error={errors.name}
      />
      <Spacing vertical={15} />
      <textarea placeholder="Nome da conquista" />
      <Spacing vertical={15} />
      <Text>Aréa do conhecimento:</Text>
      <Spacing vertical={15} />
      <Select onChange={setUserType} value={usertype} data={data} />
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
