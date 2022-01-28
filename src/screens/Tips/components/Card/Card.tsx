import React from 'react';

import { Container } from './styles';

type CardProps = {
  text?: string;
  title?: string;
};

export const Card = ({ text, title }: CardProps): JSX.Element => {
  return (
    <Container>
      <div>{title}</div>
      <p>{text}</p>
    </Container>
  );
};
