import React from 'react';

import { Container } from './styles';

export const Card = ({ text }): JSX.Element => {
  return (
    <Container>
      <p>{text}</p>
    </Container>
  );
};
