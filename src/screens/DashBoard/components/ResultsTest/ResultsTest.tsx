import React from 'react';

import Text from '@components/Text';

import { Container } from './styles';

export const ResultsTest = (): JSX.Element => {
  return (
    <Container>
      <div>
        <Text>Simulados</Text>
        <Text>Mês/Periodo</Text>
      </div>
    </Container>
  );
};
