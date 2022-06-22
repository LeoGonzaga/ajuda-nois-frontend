import React from 'react';

import { Container } from './styles';

export type Props = {
  status: string;
  prevStatus: string;
  onHandleClick: (state: string) => void;
};

export const Buttons = ({
  status,
  prevStatus,
  onHandleClick,
}: Props): JSX.Element => {
  const handleStateChange = (state: string) => {
    onHandleClick(state);
  };

  return (
    <Container status={status}>
      {status == 'completed' ? (
        <div onClick={() => handleStateChange(prevStatus)}>Concluído</div>
      ) : (
        <div onClick={() => handleStateChange('completed')}>Concluir</div>
      )}
      <div>Deletar</div>
    </Container>
  );
};
