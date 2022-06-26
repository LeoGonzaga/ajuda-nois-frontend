import React, { useState } from 'react';
import { BiTrash } from 'react-icons/bi';

import EmptyState from '@components/EmptyState';
import LoadingTable from '@components/LoadingTable';
import { Options, Response, requestAPI } from '@services/index';
import { uuid } from 'uuidv4';

import {
  Container,
  Tr,
  Column,
  Th,
  ScrollContainer,
  ButtonsContainer,
} from './styles';

export const Table = ({ data, reload, loading }: any): JSX.Element => {
  const handleRemoveSubject = async (id: string) => {
    const token = localStorage.getItem('token');
    const payload: Options = {
      method: 'DELETE',
      url: '/deleteQuestion',
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
          <Column>Nome</Column>
          <Column>Tópico</Column>
          <Column>Conteudo</Column>
          <Column>Resposta</Column>
          <Column></Column>
        </Th>
        {data?.map((element: any) => (
          <Tr key={uuid()}>
            <Column>{element?.name}</Column>
            <Column>{element.topic_info?.name}</Column>
            <Column>
              {element.question.replace(new RegExp('<[^>]*>', 'g'), '')}
            </Column>
            <Column>{element.answer}</Column>
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
          <EmptyState text="Não há matérias cadastradas até o momento" />
        )}
      </ScrollContainer>
    </Container>
  );
};
