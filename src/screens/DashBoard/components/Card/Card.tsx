import React from 'react';

import Spacing from '@components/Spacing';
import Text from '@components/Text';

import { Container, Circle, Wrapper } from './styles';

type Props = {
  indicator: string;
  value: number;
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
        <Text size={36} bold>
          {value}
        </Text>
        <Spacing horizontal={5} />
        <Text size={16}>{text}</Text>
      </Wrapper>
    </Container>
  );
};
