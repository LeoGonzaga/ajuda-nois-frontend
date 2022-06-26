/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import ActionButton from '@components/Buttons/ActionButton';
import EditorContainer from '@components/Editor';
import Flex from '@components/Flex';
import Spacing from '@components/Spacing';
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
      <EditorContainer showControls onChange={() => {}} />
      <Spacing vertical={15} />
      <Styles.AddQuestion>Adicionar alternativas </Styles.AddQuestion>
      <Spacing vertical={15} />
      <Styles.Flex>
        <input type="checkbox" name="" id="" />
        <textarea placeholder="Digite uma resposta" />
      </Styles.Flex>
      <Styles.Flex>
        <input type="checkbox" name="" id="" />
        <textarea placeholder="Digite uma resposta" />
      </Styles.Flex>
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
