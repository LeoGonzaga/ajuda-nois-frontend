import React from 'react';

import { Container } from './styles';

export type ActionButtonProps = {
  width?: string;
  color?: string;
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick: (e: any) => void;
};

export const ActionButton = ({
  children,
  color,
  disabled,
  loading,
  width,
  onClick,
}: ActionButtonProps): JSX.Element => {
  return (
    <Container
      disabled={disabled}
      color={color}
      width={width}
      onSubmit={onClick}
      onClick={onClick}
    >
      {loading ? <p>Carregando</p> : children}
    </Container>
  );
};
