import React from 'react';
import { BiTrash } from 'react-icons/bi';
import { useDispatch } from 'react-redux';

import EmptyState from '@components/EmptyState';
import LoadingTable from '@components/LoadingTable';
import { Options, Response, requestAPI } from '@services/index';
import {
  checkError,
  getColorByTest,
  openErrorNotification,
  openNotification,
} from '@utils/functions';
import { setNotification } from 'src/config/actions/notification';
import { uuid } from 'uuidv4';

import {
  Container,
  Tr,
  Column,
  Th,
  ScrollContainer,
  ButtonsContainer,
} from './styles';

const COLORS_BOOK: any = {
  blue: 'Azul',
  yellow: 'Amarelo',
  white: 'Branco',
  pink: 'Rosa',
  gray: 'Cinza',
};

const DAY: any = {
  first: '1º dia',
  second: '2º dia',
};

type Props = {
  data: Array<any>;
  reload: () => void;
  loading: boolean;
};
export const Table = ({ data, reload, loading }: Props): JSX.Element => {
  const dispatch = useDispatch();

  const handleRemoveSubject = async (id: string) => {
    const token = localStorage.getItem('token');
    const payload: Options = {
      method: 'DELETE',
      url: '/deleteEnem',
      data: {
        id,
      },
      headers: { Authorization: `Bearer ${token}` },
    };
    const { response }: Response = await requestAPI(payload);
    const error = checkError(response?.status);

    if (error) {
      dispatch(setNotification(openErrorNotification(response?.data?.error)));
      return;
    }
    dispatch(setNotification(openNotification('Prova removida com sucesso!')));
    reload();
  };

  return (
    <Container>
      <ScrollContainer>
        <Th>
          <Column>Ano</Column>
          <Column>Caderno de questões</Column>
          <Column>Gabarito</Column>
          <Column>Cor</Column>
          <Column>Dia de prova</Column>
          <Column></Column>
        </Th>
        {data?.map((element: any) => (
          <Tr key={uuid()} color={getColorByTest(element.color)}>
            <Column>{element.year}</Column>
            <Column>
              <a href={element.exam} target="_blank" rel="noreferrer">
                Download
              </a>
            </Column>
            <Column>
              <a target="_blank" href={element.template} rel="noreferrer">
                Download
              </a>
            </Column>
            <Column>Caderno {COLORS_BOOK[element.color]}</Column>
            <Column>{DAY[element.day] || 'Não informado'}</Column>
            <Column>
              {!loading && (
                <ButtonsContainer>
                  <button onClick={() => handleRemoveSubject(element._id)}>
                    <BiTrash size={25} />
                  </button>
                </ButtonsContainer>
              )}
            </Column>
          </Tr>
        ))}

        {loading && <LoadingTable />}

        {data?.length === 0 && !loading && (
          <EmptyState text="Não há provas cadastradas até o momento" />
        )}
      </ScrollContainer>
    </Container>
  );
};
