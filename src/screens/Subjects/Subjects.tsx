import React from 'react';

import Title from '@components/Title';

import { Container } from './styles';

export const Subjects: React.FC = () => {
  return (
    <Container>
      <Title text="Escolher" contrast="matéria" />
    </Container>
  );
};
