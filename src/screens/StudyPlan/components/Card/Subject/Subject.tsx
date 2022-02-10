import React from 'react';

import { Container } from './styles';

type Props = {
  subject: string;
  topic: string;
};

export const Subject: React.FC<Props> = ({ subject, topic }: Props) => {
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
