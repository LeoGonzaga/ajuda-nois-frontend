import React from 'react';
import { BiTrash } from 'react-icons/bi';

import { uuid } from 'uuidv4';

import {
  Container,
  Tr,
  Column,
  Th,
  ScrollContainer,
  ButtonsContainer,
} from './styles';

export const Table = ({ data }: any): JSX.Element => {
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
            <Column>{element.area}</Column>
            <Column>{element.teacher_id}</Column>
            <Column>
              <ButtonsContainer>
                <BiTrash size={25} />
              </ButtonsContainer>
            </Column>
          </Tr>
        ))}
      </ScrollContainer>
    </Container>
  );
};
