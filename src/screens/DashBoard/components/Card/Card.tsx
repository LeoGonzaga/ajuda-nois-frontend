import React from 'react';

import Text from '@components/Text';

import { Container, Circle, Wrapper } from './styles';

type Props = {
  indicator: string;
  value: string;
  text: string;
  color: string;
};

export const Card = ({ color, indicator, value, text }: Props): JSX.Element => {
  return (
    <Container>
      <Circle color={color}>
        <p>{indicator}</p>
      </Circle>
      <Wrapper>
        <Text size={24} bold>
          {value}%
        </Text>
        <Text size={12}>{text}</Text>
      </Wrapper>
    </Container>
  );
};
