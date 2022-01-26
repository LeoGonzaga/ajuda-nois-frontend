import React from 'react';

import Spacing from '@components/Spacing';
import Title from '@components/Title';

import SelectSubject from './components/SelectSubject';
import { Container } from './styles';

export const Tips: React.FC = () => {
  return (
    <Container>
      <Title text="Buscar" contrast="dicas" />
      <Spacing vertical={10} />
      <SelectSubject />
    </Container>
  );
};
