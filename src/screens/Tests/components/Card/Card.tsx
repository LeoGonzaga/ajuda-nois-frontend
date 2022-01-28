import React from 'react';

import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container } from './styles';

type Props = {
  test: string;
  result: string;
};
type CardProps = {
  title?: string;
  first?: Props;
  second?: Props;
};

export const Card = ({ first, second, title }: CardProps): JSX.Element => {
  return (
    <Container>
      <div>{title}</div>
      <Text size={19} bold color={COLORS.NEUTRAL}>
        1º Dia
      </Text>
      <a target="_blank" href={first?.test} rel="noreferrer">
        <p>Prova</p>
      </a>
      <a target="_blank" href={first?.result} rel="noreferrer">
        <p>Gabarito</p>
      </a>

      <Text size={19} bold color={COLORS.NEUTRAL}>
        2º Dia
      </Text>
      <a target="_blank" href={second?.test} rel="noreferrer">
        <p>Prova</p>
      </a>
      <a target="_blank" href={second?.result} rel="noreferrer">
        <p>Gabarito</p>
      </a>
    </Container>
  );
};
