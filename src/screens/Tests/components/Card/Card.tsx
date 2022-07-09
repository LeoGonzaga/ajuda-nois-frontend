import React from 'react';

import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';
import EnemLogo from 'assets/enem.svg';

import { Container, Flex } from './styles';

type Props = {
  exam: string;
  template: string;
};
type CardProps = {
  title?: string;
  test?: Props;
  color: string;
  day: number;
};

export const Card = ({ test, title, color, day }: CardProps): JSX.Element => {
  return (
    <Container color={color}>
      <EnemLogo />
      <Spacing vertical={5} />
      <div>
        <Flex>
          <Text size={16} bold color={COLORS.TERTIARY}>
            {day}º Dia
          </Text>
          <Spacing horizontal={10} />
          <a target="_blank" href={test?.exam} rel="noreferrer">
            <p>Prova</p>
          </a>
          <Spacing horizontal={5} />
          <a target="_blank" href={test?.template} rel="noreferrer">
            <p>Gabarito</p>
          </a>
        </Flex>
        <Spacing vertical={5} />
      </div>
    </Container>
  );
};
