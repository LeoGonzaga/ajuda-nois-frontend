import React from 'react';

import { Container } from './styles';

export type TextProps = {
  size?: number;
  bold?: boolean;
  color?: string;
  center?: boolean;
  children: React.ReactNode;
};
export const Text = ({
  children,
  bold,
  size,
  color,
  center,
}: TextProps): JSX.Element => {
  return (
    <Container bold={bold} size={size} color={color} center={center}>
      {children}
    </Container>
  );
};
