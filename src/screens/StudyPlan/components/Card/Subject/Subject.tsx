import React from 'react';

import { Container } from './styles';

type Props = {
  subject: string;
  topic: string;
};

export const Subject = ({ subject, topic }: Props): JSX.Element => {
  return (
    <Container>
      <div>
        <span>Disciplina: </span>
        <span>{subject}</span>
      </div>
      <div>
        <span>Tópico: </span>
        <span>{topic}</span>
      </div>
    </Container>
  );
};
