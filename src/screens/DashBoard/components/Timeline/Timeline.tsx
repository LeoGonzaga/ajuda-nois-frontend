import React from 'react';

import LineChartContainer from '@components/LineChart';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container } from './styles';

export const Timeline = (): JSX.Element => {
  return (
    <Container>
      <div>
        <Text bold color={COLORS.WHITE}>
          Tempo de estudo
        </Text>
        <Text size={14}>Pomorodo total mensal</Text>
      </div>
      <Spacing vertical={10} />
      <LineChartContainer />
    </Container>
  );
};
