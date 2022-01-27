import React from 'react';

import BG from '../../../assets/BG.svg';
import Form from './components/Form';
import { Container } from './styles';

export const Login: React.FC = () => {
  return (
    <Container>
      <BG />
      <Form />
    </Container>
  );
};
