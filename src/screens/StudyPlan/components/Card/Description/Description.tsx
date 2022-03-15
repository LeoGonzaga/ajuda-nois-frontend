import React from 'react';

import { Container } from './styles';

type Props = {
  text?: string;
  onClick: () => void;
};

export const Description = ({ text, onClick }: Props): JSX.Element => {
  return (
    <Container onClick={onClick}>
      <p>{text}</p>
    </Container>
  );
};
