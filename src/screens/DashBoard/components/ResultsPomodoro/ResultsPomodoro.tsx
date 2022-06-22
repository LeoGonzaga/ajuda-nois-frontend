import React from 'react';

import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container } from './styles';

export const ResultsPomodoro = (): JSX.Element => {
  return (
    <Container>
      <div>
        <Text bold color={COLORS.BLACK} size={18}>
          Pomodoro
        </Text>
        <Text size={14}>Por área do conhecimento</Text>
      </div>
    </Container>
  );
};
