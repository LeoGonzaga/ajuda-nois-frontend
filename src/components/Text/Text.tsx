import React from 'react';

import { Container } from './styles';

export type TextProps = {
  size?: number;
  bold?: boolean;
  color?: string;
  children: React.ReactNode;
};
export const Text = ({ children, bold, size, color }: TextProps) => {
  return (
    <Container bold={bold} size={size} color={color}>
      {children}
    </Container>
  );
};
