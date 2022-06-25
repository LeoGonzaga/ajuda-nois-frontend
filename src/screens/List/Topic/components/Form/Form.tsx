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

const token =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjIxZGFiZGU2OTJkMjMyZGI0YTQyYmY1IiwiaWF0IjoxNjQ2MTEzOTY2LCJleHAiOjE2NDYyMDAzNjZ9.ANPjMTfHPjJJ-jb-Yn4FFYbzCWnVZ_jJ4V7-oJg12y2tL1PaZ_3l9z7SJTEXuXerxM11_k1yMoDprGYOO8pXFY4Qt3tipdkM5LnwH0xun5o2PE9OzwR9tovX2JTdHsnnGU9osRto7uw0s2HmJfHhc0bNTMEo9jyPl3ccxcPkRR`';

const data = [
  {
    value: 'teacher',
    name: 'Matemática',
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

type Props = {
  onClose: () => void;
  reload: () => void;
  subjects: Array<any>;
};

export const Form = ({ onClose, reload, subjects }: Props): JSX.Element => {
  const [name, setName] = useChangeText('');
  const [subject, setSubject] = useState(subjects[0]?.value);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    if (name.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        name: true,
      }));
    }

    const options: Options = {
      method: 'POST',
      url: '/createSubject',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        name: 'string',
        subject_id: 'string - ara de conhecimento?',
      },
    };
    const { response }: Response = await requestAPI(options);
    checkError(response?.status);
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

  return (
    <Styles.Container onSubmit={handleSubmit}>
      <TextInput
        width="350px"
        placeholder="Nome do tópico"
        type="text"
        value={name}
        onChange={setName}
        error={errors.name}
      />
      <Spacing vertical={15} />
      <Text>Matéria:</Text>
      <Spacing vertical={15} />
      <Select onChange={setSubject} value={subject} data={subjects} />
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
