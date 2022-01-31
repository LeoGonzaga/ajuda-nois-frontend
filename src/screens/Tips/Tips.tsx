import React from 'react';

import Title from '@components/Title';

import { Container } from './styles';

export const Tips: React.FC = () => {
  return (
    <Container>
      <Title
        text="Buscar"
        contrast="dicas"
        subText="Selecione a matéria abaixo para filtrar"
      />
    </Container>
  );
};
