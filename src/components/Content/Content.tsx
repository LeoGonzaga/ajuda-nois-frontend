import React from 'react';

import { Container } from './styles';

type Props = {
  children: React.ReactNode;
};

export const Content = ({ children }: Props): JSX.Element => {
  return <Container>{children}</Container>;
};
