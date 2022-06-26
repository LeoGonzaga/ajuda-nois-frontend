import React from 'react';

import Flex from '@components/Flex';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';
import EnemLogo from 'assets/enem.svg';

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
      <EnemLogo />
      <Flex align="center" width="100%" justify="left">
        <p>{title}</p>
      </Flex>
      <Spacing vertical={5} />
      <div>
        <Flex>
          <Text size={16} bold color={COLORS.TERTIARY}>
            1º Dia
          </Text>
          <Spacing horizontal={10} />
          <a target="_blank" href={first?.test} rel="noreferrer">
            <p>Prova</p>
          </a>
          <Spacing horizontal={5} />
          <a target="_blank" href={first?.result} rel="noreferrer">
            <p>Gabarito</p>
          </a>
        </Flex>
        <Spacing vertical={5} />
      </div>
    </Container>
  );
};
