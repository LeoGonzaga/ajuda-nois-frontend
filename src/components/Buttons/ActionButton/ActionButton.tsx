import React from 'react';

import { Container } from './styles';

export type ActionButtonProps = {
  width?: string;
  color?: string;
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
};

export const ActionButton = ({
  children,
  color,
  disabled,
  loading,
  width,
}: ActionButtonProps) => {
  return (
    <Container disabled={disabled} color={color} width={width}>
      {loading ? <p>Carregando</p> : children}
    </Container>
  );
};
