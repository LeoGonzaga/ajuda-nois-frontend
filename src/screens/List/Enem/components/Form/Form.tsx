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
    value: 'blue',
    name: 'Azul',
  },
  {
    value: 'yellow',
    name: 'Amarelo',
  },
  {
    value: 'white',
    name: 'Branco',
  },
  {
    value: 'pink',
    name: 'Rosa',
  },
];

export const Form = (): JSX.Element => {
  const [year, setYear] = useChangeText('');
  const [examBase64, setExamBase64] = useState<string>('');
  const [templateBase64, setTemplateBase64] = useState<string>('');
  const [color, setColor] = useState('blue');

  const [errors, setErrors] = useState({
    year: false,
    examBase64: false,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (year.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        email: true,
      }));
    }

    if (examBase64.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        examBase64: true,
      }));
    }

    const token = localStorage.getItem('token');

    const options: Options = {
      method: 'POST',
      url: '/createEnem',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        year,
        exam_base64: examBase64,
        template_base64: templateBase64,
        color,
      },
    };
    const response = await requestAPI(options);
    console.log(response);
  };

  const handleResetErrorInput = () => {
    if (year.length > 0) {
      setErrors((prevState) => ({
        ...prevState,
        year: false,
      }));
    }

    if (examBase64.length > 0) {
      setErrors((prevState) => ({
        ...prevState,
        examBase64: false,
      }));
    }
  };

  useEffect(() => {
    handleResetErrorInput();
  }, [year, examBase64]);

  return (
    <Styles.Container onSubmit={handleSubmit}>
      <TextInput
        width="350px"
        placeholder="Ano da prova"
        type="text"
        value={year}
        onChange={setYear}
        error={errors.year}
      />
      <Spacing vertical={15} />
      <Text>Caderno de questões:</Text>
      <Spacing vertical={5} />
      <input type="file" name="" id="" />
      <Spacing vertical={15} />
      <Text>Gabarito:</Text>
      <Spacing vertical={5} />
      <input type="file" name="" id="" />
      <Spacing vertical={15} />
      <Select onChange={setColor} value={color} data={data} />
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
