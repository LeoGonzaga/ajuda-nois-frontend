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

const token =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjIxZGFiZGU2OTJkMjMyZGI0YTQyYmY1IiwiaWF0IjoxNjQ2MTEzOTY2LCJleHAiOjE2NDYyMDAzNjZ9.ANPjMTfHPjJJ-jb-Yn4FFYbzCWnVZ_jJ4V7-oJg12y2tL1PaZ_3l9z7SJTEXuXerxM11_k1yMoDprGYOO8pXFY4Qt3tipdkM5LnwH0xun5o2PE9OzwR9tovX2JTdHsnnGU9osRto7uw0s2HmJfHhc0bNTMEo9jyPl3ccxcPkRR`';

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
  const [username, setUsername] = useChangeText('');
  const [email, setEmail] = useChangeText('');
  const [usertype, setUserType] = useState<string>('');

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
      url: '/createSubject',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        name: 'string',
        area: 'string - ara de conhecimento?',
        teacher_id: 'string - verificar se é string mesmo',
      },
    };
    const response = await requestAPI(options);
    console.log(response);
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
        placeholder="Nome do topico"
        type="text"
        value={username}
        onChange={setUsername}
        error={errors.username}
      />
      <Spacing vertical={15} />
      <textarea
        placeholder="Nome do topico"
        value={username}
        onChange={setUsername}
      />
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
