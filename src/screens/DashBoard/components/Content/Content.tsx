import React from 'react';

import { Container } from './styles';

type Props = {
  children: React.ReactNode;
};

export const Content = ({ children }: Props) => {
  return <Container>{children}</Container>;
};
