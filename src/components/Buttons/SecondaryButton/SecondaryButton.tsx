import React from 'react';

import { Container } from './styles';

type SecondaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};
export const SecondaryButton = ({
  children,
  onClick,
}: SecondaryButtonProps): JSX.Element => {
  return <Container onClick={onClick}>{children}</Container>;
};
