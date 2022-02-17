import React from 'react';

import { Container } from './styles';

type SecondaryButtonProps = {
  children: React.ReactNode;
};
export const SecondaryButton = ({
  children,
}: SecondaryButtonProps): JSX.Element => {
  return <Container>{children}</Container>;
};
