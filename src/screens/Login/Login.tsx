import React from 'react';

import Container from '@components/Container';
import Flex from '@components/Flex';

import Form from './components/Form';

export const Login: React.FC = () => {
  return (
    <Container>
      <Flex direction="column" justify="center" align="center">
        <Form />
      </Flex>
    </Container>
  );
};
