import React from 'react';

import BG from '../../../assets/boy.svg';
import Form from './components/Form';
import { Container } from './styles';

/**Criar um svg para ser usado como background */
export const Login = (): JSX.Element => {
  return (
    <Container>
      <BG />
      <Form />
    </Container>
  );
};
