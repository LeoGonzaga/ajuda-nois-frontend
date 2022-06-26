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
import { checkError, toBase64 } from '@utils/functions';
import { useChangeText } from 'src/hooks/useChangeText';

import { Styles } from './styles';

const types = [
  {
    value: 'pomodoro_time',
    name: 'Pomodoro',
  },
  {
    value: 'level',
    name: 'Level',
  },
  {
    value: 'quiz_completed',
    name: 'Quiz completado',
  },
  {
    value: 'topics_completed',
    name: 'Tópico completado',
  },
  {
    value: 'mock_exam_done',
    name: 'Simulados feitos',
  },
  {
    value: 'mock_exam_score',
    name: 'Nota no simulado',
  },
];

const areas = [
  {
    value: 'general',
    name: 'Geral',
  },
  {
    value: 'human_sciences',
    name: 'Ciências Humanas',
  },
  {
    value: 'languages',
    name: 'Linguagens',
  },
  {
    value: 'mathematics',
    name: 'Matemática',
  },
  {
    value: 'natural_sciences',
    name: 'Ciências Naturais',
  },
];

export const Form = ({ onClose, reload }: any): JSX.Element => {
  const [name, setName] = useChangeText('');
  const [description, setDescription] = useChangeText('');
  const [icon, setIcon] = useState('');
  const [type, setType] = useState<string>(types[0].value);
  const [area, setArea] = useState(areas[0].value);
  const [value, setValue] = useState('');
  const [exp, setExp] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  const [errors, setErrors] = useState({
    name: false,
    description: false,
    icon_base64: false,
    experience: false,
  });

  const formatBaseToRequest = (base: any) => {
    return base.split('base64,');
  };

  const handleUploadIcon = async (e: any) => {
    const base = await toBase64(e.target.files[0]);
    const splitBase = formatBaseToRequest(base);
    setIcon(splitBase[1]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const token = await localStorage.getItem('token');

    if (name.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        name: true,
      }));
    }

    if (description.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        description: true,
      }));
    }

    const options: Options = {
      method: 'POST',
      url: '/createAchievement',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        name,
        icon_base64: icon,
        description,
        experience: Number(exp),
        type,
        area,
        quantity: Number(value),
      },
    };
    const { response }: Response = await requestAPI(options);
    checkError(response?.status);
    await reload();
    setLoading(false);
    onClose();
  };

  const handleResetErrorInput = () => {
    if (description.length > 0) {
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
  }, [name, description]);

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

      <input type="file" onChange={handleUploadIcon} />

      <Spacing vertical={15} />
      <textarea
        placeholder="Descrição da conquista"
        value={description}
        onChange={setDescription}
      />
      <Spacing vertical={15} />
      <Text bold>Condições de desbloqueio:</Text>
      <Spacing vertical={15} />
      <Text>Tipo de conquista:</Text>
      <Spacing vertical={15} />
      <Select onChange={setType} value={type} data={types} />
      <Spacing vertical={15} />
      <Text>Aréa do conhecimento:</Text>
      <Spacing vertical={15} />
      <Select onChange={setArea} value={area} data={areas} />
      <Spacing vertical={15} />

      <input
        type="number"
        placeholder="Valor"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Spacing vertical={5} />
      <input
        type="number"
        placeholder="Experiência"
        value={exp}
        onChange={(e) => setExp(e.target.value)}
      />
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
