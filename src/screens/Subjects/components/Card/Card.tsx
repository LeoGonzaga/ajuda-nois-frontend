import React from 'react';

import { Container } from './styles';

type Props = {
  title: string;
  color: string;
  icon: JSX.Element;
};

export const Card = ({ title, color, icon }: Props): JSX.Element => {
  return (
    <Container color={color}>
      <p>{icon}</p>
      <h1>{title}</h1>
      <span>
        Matemática, Geometria Linear, Geometria Espacial,Matemática, Geometria
        Linear, Geometria Espacial
      </span>
    </Container>
  );
};
