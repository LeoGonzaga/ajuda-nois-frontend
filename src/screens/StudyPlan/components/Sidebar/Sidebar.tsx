import React from 'react';

import CurrentDate from './CurrentDate';
import Months from './Months';
import { Container } from './styles';

export const Sidebar = (): JSX.Element => {
  return (
    <Container>
      <CurrentDate />
      <Months />
    </Container>
  );
};
