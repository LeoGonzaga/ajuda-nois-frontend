import React from 'react';

import { Container } from './styles';

export type CardProps = {
  children: React.ReactNode;
};

export const Card = ({ children }: CardProps): JSX.Element => {
  return <Container>{children}</Container>;
};
