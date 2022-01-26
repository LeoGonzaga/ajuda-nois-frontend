import React from 'react';

import { Container } from './styles';

type SecundaryButtonProps = {
  children: React.ReactNode;
};
export const SecundaryButton = ({
  children,
}: SecundaryButtonProps): JSX.Element => {
  return <Container>{children}</Container>;
};
