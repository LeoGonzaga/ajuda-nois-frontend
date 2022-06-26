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

const DAY_TEST = [
  {
    value: 'first',
    name: '1º dia',
  },
  {
    value: 'second',
    name: '2º dia',
  },
];

type Props = {
  onClose: () => void;
  reload: () => void;
};

export const Form = ({ onClose, reload }: Props): JSX.Element => {
  const [year, setYear] = useState<any>(new Date().getFullYear());
  const [examBase64, setExamBase64] = useState<any>('');
  const [templateBase64, setTemplateBase64] = useState<any>('');
  const [color, setColor] = useState('blue');
  const [loading, setLoading] = useState<boolean>(false);
  const [allYears, setAllYears] = useState<any>([]);
  const [day, setDay] = useState(DAY_TEST[0].value);

  const handleCreateEnemYears = () => {
    const atualYear = new Date().getFullYear();
    const FIRST_ENEM = 1999;
    const totalTests = atualYear - FIRST_ENEM;
    const arrayTests = [];

    for (let index = 0; index <= totalTests; index++) {
      const enem_year = atualYear - index;
      const payload = {
        value: enem_year,
        name: enem_year,
      };
      arrayTests.push(payload);
    }

    setAllYears(arrayTests);
  };

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
        day,
      },
    };
    const { response }: Response = await requestAPI(options);
    checkError(response?.status);
    await reload();
    setLoading(false);
    onClose();
  };

  useEffect(() => {
    handleCreateEnemYears();
  }, []);

  return (
    <Styles.Container onSubmit={handleSubmit}>
      <Select onChange={setYear} value={year} data={allYears} />
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
      <Spacing vertical={15} />
      <Text>Cor do caderno:</Text>
      <Spacing vertical={5} />
      <Select onChange={setColor} value={color} data={data} />
      <Spacing vertical={15} />
      <Text>Dia de prova:</Text>
      <Spacing vertical={5} />
      <Select onChange={setDay} value={day} data={DAY_TEST} />
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
