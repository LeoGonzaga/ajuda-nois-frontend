import React from 'react';

import { Container } from './styles';

export type Props = {
  status: string;
  prevStatus: string;
  onHandleClick: (state: string) => void;
};

export const Buttons: React.FC<Props> = ({
  status,
  prevStatus,
  onHandleClick,
}: Props) => {
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
      {status == 'completed' ? ' ' : <div>Editar</div>}
      <div>Deletar</div>
    </Container>
  );
};
