import React from 'react';

import Text from '@components/Text';

import { Container, Circle, Wrapper } from './styles';

export const Card = (): JSX.Element => {
  return (
    <Container>
      <Circle>
        <p>P</p>
      </Circle>
      <Wrapper>
        <Text size={24} bold>
          57.97%
        </Text>
        <Text size={16}>Conclusão do Plano</Text>
      </Wrapper>
    </Container>
  );
};
