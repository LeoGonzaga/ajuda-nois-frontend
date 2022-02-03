import React from 'react';

import Title from '@components/Title';

import Sidebar from './components/Sidebar';
import { Container } from './styles';

export const StudyPlan: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <Title
          text="Cronograma de"
          contrast="estudos"
          subText="Selecione um dia para filtrar"
        />
      </div>
      <Sidebar />
    </Container>
  );
};
