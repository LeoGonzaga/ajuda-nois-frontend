import React from 'react';

import { Container } from './styles';

type Props = {
  text: string;
  onClick: () => void;
};

export const Description: React.FC<Props> = ({ text, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <p>{text}</p>
    </Container>
  );
};
