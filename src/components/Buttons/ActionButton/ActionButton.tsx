import React from 'react';

import { Container } from './styles';

export type ActionButtonProps = {
  width?: string;
  color?: string;
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

export const ActionButton = ({
  children,
  color,
  disabled,
  loading,
  width,
  onClick,
}: ActionButtonProps) => {
  return (
    <Container
      disabled={disabled}
      color={color}
      width={width}
      onClick={onClick}
    >
      {loading ? <p>Carregando</p> : children}
    </Container>
  );
};
