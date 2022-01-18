import React from 'react';

import { ContainerStyled } from './styles';

type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};
