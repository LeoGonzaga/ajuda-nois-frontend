/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, ChangeEvent } from 'react';

import ActionButton from '@components/Buttons/ActionButton';
import Flex from '@components/Flex';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { Options, requestAPI, Response } from '@services/index';
import { COLORS } from '@themes/colors';
import { checkError, toBase64 } from '@utils/functions';
import moment from 'moment';

import { Styles } from './styles';

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
  const today = moment();
  const [date, setDate] = useState<any>(today.format('YYYY-MM-DD'));
  const [examBase64, setExamBase64] = useState<any>('');
  const [templateBase64, setTemplateBase64] = useState<any>('');
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem('token');

    const options: Options = {
      method: 'POST',
      url: '/createMockExam',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        date,
        students_template_64: examBase64,
        template_64: templateBase64,
      },
    };
    const { response }: Response = await requestAPI(options);
    checkError(response?.status);
    await reload();
    setLoading(false);
    onClose();
  };

  const handleChageDate = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setDate(target.value);
  };

  return (
    <Styles.Container onSubmit={handleSubmit}>
      <div>
        <p>
          - Preencha as planilhas com os emails dos alunos e matérias como estão
          cadastradas no sistema
        </p>
        <Spacing vertical={5} />
        <p>
          - As respostas do gabarito oficial são apenas as letras de A a E
          contendo a resposta da questão
        </p>
        <Spacing vertical={5} />
        <p>
          - No gabarito do aluno, caso a questão não tenha sido respondida,
          deixe a resposta em branco
        </p>
        <Spacing vertical={5} />
        <p>
          - No gabarito oficial é necessario colocar todas as 185 questões da
          prova (5 a mais devido as opções de lingua estrageira)
        </p>
        <Spacing vertical={5} />
        <p>
          - No gabarito do estudante é só colocado 180 questões respondidas, as
          de lingua estrageiras da opção não escolhida devem deixadas em branco
        </p>
      </div>
      <Spacing vertical={5} />
      <Text>Dia da prova:</Text>
      <Spacing vertical={5} />
      <input type="date" value={date} onChange={handleChageDate} />
      <Spacing vertical={15} />
      <Text>Caderno de questões:</Text>
      <Spacing vertical={5} />
      <input
        type="file"
        name="exame"
        id=""
        onChange={handleUploadExameFile}
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
      />
      <Spacing vertical={15} />
      <Text>Gabarito:</Text>
      <Spacing vertical={5} />
      <input
        type="file"
        name="template"
        id=""
        onChange={handleUploaTemplateFile}
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
      />
      <Spacing vertical={15} />
      <Flex width="19%">
        <ActionButton
          color={COLORS.SECONDARY}
          width="350px"
          onClick={handleSubmit}
          loading={loading}
          disabled={loading || date?.length === 0}
        >
          Salvar
        </ActionButton>
        <Spacing vertical={5} />
      </Flex>
    </Styles.Container>
  );
};
