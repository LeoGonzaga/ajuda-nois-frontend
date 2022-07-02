import React, { useState } from 'react';
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
  fisrt: '1º dia',
  second: '2º dia',
};

type Props = {
  data: Array<any>;
  reload: () => void;
  loading: boolean;
};
export const Table = ({ data, reload, loading }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const handleRemoveExam = async (id: string) => {
    const token = localStorage.getItem('token');
    const payload: Options = {
      method: 'DELETE',
      url: '/deleteMockExam',
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
    dispatch(
      setNotification(openNotification('Simulado removido com sucesso!'))
    );
    reload();
  };

  return (
    <Container>
      <ScrollContainer>
        <Th>
          <Column>Dia de prova</Column>
          <Column></Column>
        </Th>
        {data?.map((element: any) => (
          <Tr key={uuid()} color={getColorByTest(element.color)}>
            <Column>{element.date?.split('-').reverse().join('-')}</Column>

            <Column>
              {!loading && (
                <ButtonsContainer onClick={() => handleRemoveExam(element._id)}>
                  <BiTrash size={25} />
                </ButtonsContainer>
              )}
            </Column>
          </Tr>
        ))}

        {loading && <LoadingTable />}

        {data?.length === 0 && !loading && (
          <EmptyState text="Não há simulados cadastrados até o momento" />
        )}
      </ScrollContainer>
    </Container>
  );
};
