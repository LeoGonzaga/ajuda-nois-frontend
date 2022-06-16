import React from 'react';
import { BiTrash } from 'react-icons/bi';

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

export const Table = ({ data, reload }: any): JSX.Element => {
  const AREAS: any = {
    humanScience: 'Ciências Humanas',
    naturalScience: 'Ciências da Natureza',
    matematic: 'Matemática',
    language: 'Linguagens',
  };

  const handleRemoveSubject = async (id: string) => {
    const token = localStorage.getItem('token');
    const payload: Options = {
      method: 'DELETE',
      url: '/deleteSubject',
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
          <Column>Área</Column>
          <Column>Professor</Column>
          <Column></Column>
        </Th>
        {data?.map((element: any) => (
          <Tr key={uuid()}>
            <Column>{element.name}</Column>
            <Column>{AREAS[element.area]}</Column>
            <Column>{element.teacher_id}</Column>
            <Column>
              <ButtonsContainer
                onClick={() => handleRemoveSubject(element._id)}
              >
                <BiTrash size={25} />
              </ButtonsContainer>
            </Column>
          </Tr>
        ))}
      </ScrollContainer>
    </Container>
  );
};
