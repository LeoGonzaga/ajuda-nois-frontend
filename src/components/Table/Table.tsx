import React from 'react';

import { uuid } from 'uuidv4';

import { Container, Tr, Column, Th, ScrollContainer } from './styles';

const DATA = [
  { name: 'Matemática', status: 'Ativo', type: 'Matemat. e suas tecnologias' },
];

export const Table = (): JSX.Element => {
  return (
    <Container>
      <ScrollContainer>
        <Th>
          <Column>Nome</Column>
          <Column>Tipo</Column>
          <Column>Situação</Column>
        </Th>
        {DATA?.map((student) => (
          <Tr key={uuid()}>
            <Column>{student.name}</Column>
            <Column>{student.type}</Column>
            <Column>{student.status}</Column>
          </Tr>
        ))}
      </ScrollContainer>
    </Container>
  );
};
