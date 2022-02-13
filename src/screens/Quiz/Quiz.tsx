import React from 'react';

import Title from '@components/Title';

import { Container } from './styles';

export const Quiz = (): JSX.Element => {
  return (
    <Container>
      <Title text="Iniciar" contrast="quiz" />
    </Container>
  );
};
