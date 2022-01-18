import React from 'react';

import { Container } from './styles';

export type FlexProps = {
  justify?: string;
  align?: string;
  direction?: string;
  width?: string;
  children: React.ReactNode;
};

export const Flex = ({
  children,
  direction,
  justify,
  align,
  width,
}: FlexProps) => {
  return (
    <Container
      direction={direction}
      justify={justify}
      align={align}
      width={width}
    >
      {children}
    </Container>
  );
};
