import React from 'react';

import Settings from './components/Settings';
import Timer from './components/Timer';
import { Container } from './styles';

type Props = {
  area: string;
};

export const Pomodoro = ({ area }: Props): JSX.Element => {
  return (
    <Container>
      <Timer area={area} />
      <Settings />
    </Container>
  );
};
