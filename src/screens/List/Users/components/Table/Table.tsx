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

const USERTYPE: any = {
  student: 'Aluno(a)',
  teacher: 'Professor(a)',
  admin: 'Admin',
};

export const Table = ({ data, reload, reset, loading }: any): JSX.Element => {
  const handleRemoveSubject = async (id: string) => {
    if (loading) return;
    const token = localStorage.getItem('token');
    const payload: Options = {
      method: 'DELETE',
      url: '/deleteUser',
      data: {
        id,
      },
      headers: { Authorization: `Bearer ${token}` },
    };
    const { response }: Response = await requestAPI(payload);
    if (response?.status > 300) {
      return;
    }
    await reload();
  };

  return (
    <Container>
      <ScrollContainer>
        <Th>
          <Column>Nome</Column>
          <Column>Permissão</Column>
          <Column>Email</Column>
          <Column></Column>
        </Th>
        {data?.map((element: any) => (
          <Tr key={uuid()}>
            <Column>{element.username}</Column>
            <Column>{USERTYPE[element.usertype]}</Column>
            <Column>{element.email}</Column>
            <Column>
              <ButtonsContainer
                onClick={() => handleRemoveSubject(element._id)}
              >
                <BiTrash size={25} />
              </ButtonsContainer>
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
