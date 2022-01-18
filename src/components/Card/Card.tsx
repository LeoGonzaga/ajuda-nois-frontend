import React from 'react';

import { Container } from './styles';

export type CardProps = {
  children: React.ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return <Container>{children}</Container>;
};
