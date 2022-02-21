import React from 'react';

import { Container } from './styles';

type Props = {
  startTime: string;
  endTime: string;
};

export const Times: React.FC<Props> = ({ startTime, endTime }: Props) => {
  return (
    <Container>
      <div>
        <span>Início</span> - <span>{startTime}</span>
      </div>
      <div>
        <span>Término</span> - <span>{endTime}</span>
      </div>
    </Container>
  );
};
