import React from 'react';

import Flex from '@components/Flex';
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
      <Flex align="center" width="100%" justify="center">
        <p>{title}</p>
      </Flex>
      <Spacing vertical={2} />
      <div>
        <Flex direction="column">
          <Text size={20} bold color={COLORS.TEXT}>
            1º Dia
          </Text>
          <a target="_blank" href={first?.test} rel="noreferrer">
            <p>Prova</p>
          </a>
          <a target="_blank" href={first?.result} rel="noreferrer">
            <p>Gabarito</p>
          </a>
        </Flex>
        <Spacing vertical={5} />
        <Flex direction="column">
          <Text size={20} bold color={COLORS.TEXT}>
            2º Dia
          </Text>
          <a target="_blank" href={first?.test} rel="noreferrer">
            <p>Prova</p>
          </a>
          <a target="_blank" href={first?.result} rel="noreferrer">
            <p>Gabarito</p>
          </a>
        </Flex>
      </div>
    </Container>
  );
};
