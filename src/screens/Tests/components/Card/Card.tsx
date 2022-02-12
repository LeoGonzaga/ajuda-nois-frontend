import React from 'react';

import Spacing from '@components/Spacing';
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
  color: string;
};

export const Card = ({
  first,
  second,
  title,
  color,
}: CardProps): JSX.Element => {
  return (
    <Container color={color}>
      <div>{title}</div>
      <Text size={19} bold color={COLORS.TEXT}>
        1º Dia
      </Text>
      <a target="_blank" href={first?.test} rel="noreferrer">
        <p>Prova</p>
      </a>
      <a target="_blank" href={first?.result} rel="noreferrer">
        <p>Gabarito</p>
      </a>
      <Spacing vertical={5} />
      <Text size={19} bold color={COLORS.TEXT}>
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
