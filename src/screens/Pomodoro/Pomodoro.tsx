import React, { useState } from 'react';

import Settings from './components/Settings';
import Timer from './components/Timer';
import { Container } from './styles';

export const Pomodoro = (): JSX.Element => {
  return (
    <Container>
      <p>Pomodoro</p>
      <Timer />
      <Settings />
    </Container>
  );
};
