import React from 'react';

import Container from '@components/Container';
import Flex from '@components/Flex';
import Text from '@components/Text';

import Form from './components/Form';

export const Login: React.FC = () => {
  return (
    <Container>
      <Flex direction="column" justify="center" align="center" width="400px">
        <Text>Welcome!</Text>
        <Text>
          Use these awesome forms to login or create new account in your project
          for free.!
        </Text>
        <Form />
      </Flex>
    </Container>
  );
};
