/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import ActionButton from '@components/Buttons/ActionButton';
import Flex from '@components/Flex';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { Options, requestAPI, Response } from '@services/index';
import { COLORS } from '@themes/colors';
import {
  checkError,
  openErrorNotification,
  openNotification,
  toBase64,
} from '@utils/functions';
import moment from 'moment';
import { setNotification } from 'src/config/actions/notification';

import { Styles } from './styles';

type Props = {
  onClose: () => void;
  reload: () => void;
};

export const Form = ({ onClose, reload }: Props): JSX.Element => {
  const today = moment();
  const dispatch = useDispatch();
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
    const error = checkError(response?.status);

    if (error) {
      dispatch(setNotification(openErrorNotification(response?.data?.error)));
      setLoading(false);
      return;
    }
    dispatch(setNotification(openNotification('Simulado criado com sucesso!')));
    await reload();
    setLoading(false);
    onClose();
  };

  const handleChageDate = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setDate(target.value);
  };

  return (
    <Styles.Container onSubmit={handleSubmit}>
      <Styles.Wrapper>
        <p>
          - Preencha as planilhas com os emails dos alunos e mat??rias como est??o
          cadastradas no sistema
        </p>
        <Spacing vertical={5} />
        <p>
          - As respostas do gabarito oficial s??o apenas as letras de A a E
          contendo a resposta da quest??o
        </p>
        <Spacing vertical={5} />
        <p>
          - No gabarito do aluno, caso a quest??o n??o tenha sido respondida,
          deixe a resposta em branco
        </p>
        <Spacing vertical={5} />
        <p>
          - No gabarito oficial ?? necessario colocar todas as 185 quest??es da
          prova (5 a mais devido as op????es de lingua estrageira)
        </p>
        <Spacing vertical={5} />
        <p>
          - No gabarito do estudante ?? s?? colocado 180 quest??es respondidas, as
          de lingua estrageiras da op????o n??o escolhida devem deixadas em branco
        </p>
        <Spacing vertical={10} />
        <Flex>
          <p>
            <Styles.Download
              href="https://storage.googleapis.com/ajuda-nois.appspot.com/Modelo_Gabarito_Oficial.xlsx"
              download
            >
              Gabarito oficial
            </Styles.Download>
          </p>
          <p>
            <Styles.Download
              href="https://storage.googleapis.com/ajuda-nois.appspot.com/Modelo_Gabarito_Estudantes.xlsx"
              download
            >
              Gabarito Estudantes
            </Styles.Download>
          </p>
        </Flex>
      </Styles.Wrapper>
      <Spacing vertical={5} />
      <Text>Dia da prova:</Text>
      <Spacing vertical={5} />
      <input type="date" value={date} onChange={handleChageDate} />
      <Spacing vertical={15} />
      <Text>Arquivo dos alunos:</Text>
      <Spacing vertical={5} />
      <input
        type="file"
        name="exame"
        id=""
        onChange={handleUploadExameFile}
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
      />
      <Spacing vertical={15} />
      <Text>Gabarito:</Text>
      <Spacing vertical={5} />
      <input
        type="file"
        name="template"
        id=""
        onChange={handleUploaTemplateFile}
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
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
