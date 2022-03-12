import React from 'react';

import { uuid } from 'uuidv4';

import { Container, Tr, Column, Th, ScrollContainer } from './styles';

const DATA = [{ name: 'Leonardo Gonzaga Silva', status: 'Ativo' }];

export const Table = (): JSX.Element => {
  return (
    <Container>
      <ScrollContainer>
        <Th>
          <Column>Nome</Column>
          <Column>Situação</Column>
        </Th>
        {DATA?.map((student) => (
          <Tr key={uuid()}>
            <Column>{student.name}</Column>
            <Column>{student.status}</Column>
          </Tr>
        ))}
      </ScrollContainer>
    </Container>
  );
};
