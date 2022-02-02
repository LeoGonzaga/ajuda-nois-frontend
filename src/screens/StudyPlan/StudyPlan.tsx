import React from 'react';

import Title from '@components/Title';

import { Container } from './styles';

export const StudyPlan: React.FC = () => {
  return (
    <Container>
      <Title
        text="Cronograma de"
        contrast="estudos"
        subText="Selecione um dia para filtrar"
      />
    </Container>
  );
};
