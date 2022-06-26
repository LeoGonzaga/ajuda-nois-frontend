import React from 'react';

import Form from './components/Form';
import { Container, BG } from './styles';

/**Criar um svg para ser usado como background */
export const Recovery = (): JSX.Element => {
  return (
    <BG>
      <Container>
        <Form />
      </Container>
    </BG>
  );
};
