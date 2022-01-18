import React from 'react';

import Container from '@components/Container';
import Flex from '@components/Flex';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import Form from './components/Form';

export const Login: React.FC = () => {
  return (
    <Container>
      <Flex direction="column" justify="center" align="center">
        <Flex direction="column" justify="center" width="445px">
          <Text center color={COLORS.WHITE} size={28}>
            Welcome!
          </Text>
          <Text color={COLORS.BLACK}>
            Use these awesome forms to login or create new account in your
            project for free.
          </Text>
          <Form />
        </Flex>
      </Flex>
    </Container>
  );
};
