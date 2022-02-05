import React from 'react';

import BarChartContainer from '@components/BarChart';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container } from './styles';

export const ResultsTest = (): JSX.Element => {
  return (
    <Container>
      <div>
        <Text bold color={COLORS.WHITE}>
          Simulados
        </Text>
        <Text size={14}>Mês/Periodo</Text>
      </div>
      <Spacing vertical={10} />
      <BarChartContainer />
    </Container>
  );
};
