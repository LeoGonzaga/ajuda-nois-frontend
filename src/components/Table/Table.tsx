import React from 'react';
import { BiTrash } from 'react-icons/bi';

import { Options, Response, requestAPI } from '@services/index';
import { v4 as uuidv4 } from 'uuid';

import {
  Container,
  Tr,
  Column,
  Th,
  ScrollContainer,
  ButtonsContainer,
} from './styles';

export const Table = ({ data, reload }: any): JSX.Element => {
  const USERTYPE: any = {
    student: 'Aluno(a)',
    teacher: 'Professor(a)',
    admin: 'Admin',
  };

  const handleRemoveUser = async (id: string) => {
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
    reload();
  };

  return (
    <Container>
      <ScrollContainer>
        <Th>
          <Column>Nome</Column>
          <Column>Tipo</Column>
          <Column>Email</Column>
          <Column></Column>
        </Th>
        {data &&
          data?.map((element: any) => (
            <Tr key={uuidv4()}>
              <Column>{element.username}</Column>
              <Column>{USERTYPE[element.usertype]}</Column>
              <Column>{element.email}</Column>
              <Column>
                <ButtonsContainer
                  onClick={() => handleRemoveUser(element?._id)}
                >
                  <BiTrash size={25} color="#00BF20" />
                </ButtonsContainer>
              </Column>
            </Tr>
          ))}
      </ScrollContainer>
    </Container>
  );
};
