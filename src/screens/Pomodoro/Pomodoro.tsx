import React from 'react';

import Settings from './components/Settings';
import Timer from './components/Timer';
import { Container, Content, Spacer } from './styles';

export const Pomodoro = (): JSX.Element => {
  return (
    <Container>
      <Spacer />
      <Content>
        <Timer />
        <Settings />
      </Content>
    </Container>
  );
};
