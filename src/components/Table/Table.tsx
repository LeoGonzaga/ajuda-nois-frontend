import React from 'react';

import { uuid } from 'uuidv4';

import { Container, Tr, Column, Th, ScrollContainer } from './styles';

export const Table = ({ data }: any): JSX.Element => {
  return (
    <Container>
      <ScrollContainer>
        <Th>
          <Column>Nome</Column>
          <Column>Tipo</Column>
          <Column>Situação</Column>
        </Th>
        {data?.map((student: any) => (
          <Tr key={uuid()}>
            <Column>{student.username}</Column>
            <Column>{student.usertype}</Column>
            <Column>{student.email}</Column>
          </Tr>
        ))}
      </ScrollContainer>
    </Container>
  );
};
