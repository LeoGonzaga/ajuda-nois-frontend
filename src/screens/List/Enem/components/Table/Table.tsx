import React, { useState } from 'react';
import { BiTrash } from 'react-icons/bi';

import EmptyState from '@components/EmptyState';
import LoadingTable from '@components/LoadingTable';
import { Options, Response, requestAPI } from '@services/index';
import { getColorByTest } from '@utils/functions';
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
    if (response?.status > 300) {
      return;
    }
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
                <ButtonsContainer
                  onClick={() => handleRemoveSubject(element._id)}
                >
                  <BiTrash size={25} />
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
