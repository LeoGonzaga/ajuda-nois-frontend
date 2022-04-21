import React from 'react';
import { BiTrash } from 'react-icons/bi';

import { v4 as uuidv4 } from 'uuid';

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
          <Column>Tipo</Column>
          <Column>Situação</Column>
          <Column></Column>
        </Th>
        {data &&
          data?.map((element: any) => (
            <Tr key={uuidv4()}>
              <Column>{element.username}</Column>
              <Column>{element.usertype}</Column>
              <Column>{element.email}</Column>
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
