import React from 'react';

import { Container } from './styles';

type SecondaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
};
export const SecondaryButton = ({
  children,
  onClick,
  active,
}: SecondaryButtonProps): JSX.Element => {
  return (
    <Container onClick={onClick} active={active}>
      {children}
    </Container>
  );
};
