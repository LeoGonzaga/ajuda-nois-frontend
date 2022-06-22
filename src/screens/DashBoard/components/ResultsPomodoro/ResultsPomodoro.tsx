import React from 'react';

import PieGraph from '@components/PieChart/PieChart';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Circle, Container, Content, Wrapper } from './styles';

export const ResultsPomodoro = (): JSX.Element => {
  return (
    <Container>
      <div>
        <Text bold color={COLORS.BLACK} size={18}>
          Pomodoro
        </Text>
        <Text size={14}>Por área do conhecimento</Text>
      </div>
      <PieGraph />
      <Content>
        <Wrapper>
          <Circle color={COLORS.SUBJECT_BLUE} />
          <Text>Exatas</Text>
        </Wrapper>
        <Wrapper>
          <Circle color={COLORS.YELLOW} />
          <Text>Humanas</Text>
        </Wrapper>
        <Wrapper>
          <Circle color={COLORS.RED} />
          <Text>Linguagem</Text>
        </Wrapper>
        <Wrapper>
          <Circle color={COLORS.GREEN} />
          <Text>Natureza</Text>
        </Wrapper>
      </Content>
    </Container>
  );
};
