import React from 'react';

import { Container } from './styles';

type CardProps = {
  text?: string;
  title?: string;
  color: string;
};

export const Card = ({ text, title, color }: CardProps): JSX.Element => {
  return (
    <Container className="item" color={color}>
      <h1>{title}</h1>
      <p>{text}</p>
    </Container>
  );
};
