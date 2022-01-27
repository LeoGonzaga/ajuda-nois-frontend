import React from 'react';

import { Container } from './styles';

type CardProps = {
  text?: string;
};

export const Card = ({ text }: CardProps): JSX.Element => {
  return (
    <Container>
      <div>Titulo</div>
      <p>{text}</p>
    </Container>
  );
};
