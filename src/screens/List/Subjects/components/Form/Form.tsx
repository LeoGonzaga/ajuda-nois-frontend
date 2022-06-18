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
    value: 'matematic',
    name: 'Matemática e suas tecnologias',
  },
  {
    value: 'humanScience',
    name: 'Ciencias humanas e suas tecnologias',
  },
  {
    value: 'language',
    name: 'Linguagens e suas tecnologias',
  },
  {
    value: 'naturalScience',
    name: 'Ciências da Natureza',
  },
];

export const Form = ({ teachers, reload, onClose }: any): JSX.Element => {
  const [name, setName] = useChangeText('');
  const [area, setArea] = useState<string>(data[0]?.value);
  const [teacher, setTeacher] = useState<string>(teachers[0]?.value);
  console.log(teacher, name, area);
  const [errors, setErrors] = useState({
    name: false,
    area: false,
    teacher: false,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

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
        name,
        area,
        teacher_id: teacher,
      },
    };
    const response = await requestAPI(options);
    console.log(response);
    reload();
    onClose();
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
        placeholder="Nome da matéria"
        type="text"
        value={name}
        onChange={setName}
        error={errors.name}
      />
      <Spacing vertical={15} />
      <Text>Aréa do conhecimento:</Text>
      <Spacing vertical={15} />
      <Select onChange={setArea} value={area} data={data} />
      <Spacing vertical={15} />
      <Text>Professor(a):</Text>
      <Spacing vertical={15} />
      <Select onChange={setTeacher} value={teacher} data={teachers} />
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
