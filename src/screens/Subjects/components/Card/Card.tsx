import React from 'react';

import { Container } from './styles';

type Props = {
  title: string;
  color: string;
  active: boolean;
  icon: JSX.Element;
  onClick: () => void;
};

export const Card = ({
  title,
  color,
  icon,
  onClick,
  active,
}: Props): JSX.Element => {
  return (
    <Container color={color} onClick={onClick} active={active}>
      <p>{icon}</p>
      <h1>{title}</h1>
    </Container>
  );
};
