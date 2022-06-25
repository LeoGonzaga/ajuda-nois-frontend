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
  {
    value: 'gray',
    name: 'Cinza',
  },
];

type Props = {
  onClose: () => void;
  reload: () => void;
};

export const Form = ({ onClose, reload }: Props): JSX.Element => {
  const [year, setYear] = useChangeText('');
  const [examBase64, setExamBase64] = useState<any>('');
  const [templateBase64, setTemplateBase64] = useState<any>('');
  const [color, setColor] = useState('blue');
  const [loading, setLoading] = useState<boolean>(false);

  const formatBaseToRequest = (base: any) => {
    return base.split('base64,');
  };

  const handleUploadExameFile = async (e: any) => {
    const base = await toBase64(e.target.files[0]);
    const splitBase = formatBaseToRequest(base);
    setExamBase64(splitBase[1]);
  };

  const handleUploaTemplateFile = async (e: any) => {
    const base = await toBase64(e.target.files[0]);
    const splitBase = formatBaseToRequest(base);
    setTemplateBase64(splitBase[1]);
  };

  const [errors, setErrors] = useState({
    year: false,
    examBase64: false,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (year.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        email: true,
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
    const { response }: Response = await requestAPI(options);
    checkError(response?.status);
    await reload();
    setLoading(false);
    onClose();
  };

  const handleResetErrorInput = () => {
    if (year.length > 0) {
      setErrors((prevState) => ({
        ...prevState,
        year: false,
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
      <input
        type="file"
        name="exame"
        id=""
        onChange={handleUploadExameFile}
        accept="application/pdf"
      />
      <Spacing vertical={15} />
      <Text>Gabarito:</Text>
      <Spacing vertical={5} />
      <input
        type="file"
        name="template"
        id=""
        onChange={handleUploaTemplateFile}
        accept="application/pdf"
      />
      <Spacing vertical={15} />
      <Select onChange={setColor} value={color} data={data} />
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
