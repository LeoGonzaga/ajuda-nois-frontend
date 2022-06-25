import React from 'react';

import { Container } from './styles';

type CardProps = {
  information?: string;
  name?: string;
  color: string;
};

export const Card = ({ information, name, color }: CardProps): JSX.Element => {
  return (
    <Container className="item" color={color}>
      <h1>{name}</h1>
      <p>{information}</p>
    </Container>
  );
};
