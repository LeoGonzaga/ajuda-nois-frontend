import React, { useState } from 'react';

import { Container } from './styles';

export type Props = {
  status: string;
};

export const Buttons: React.FC<Props> = ({ status }: Props) => {
  const [state, setState] = useState(status);
  return (
    <Container status={state}>
      {state == 'completed' ? (
        <div onClick={() => setState('idle')}>Concluído</div>
      ) : (
        <div onClick={() => setState('completed')}>Concluir</div>
      )}
      {state == 'completed' ? ' ' : <div>Editar</div>}
      <div>Deletar</div>
    </Container>
  );
};
