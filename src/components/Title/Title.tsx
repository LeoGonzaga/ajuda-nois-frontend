import React from 'react';

import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container } from './styles';

type Props = {
  text: string;
  contrast?: string;
};

export const Title = ({ text, contrast }: Props) => {
  return (
    <Container>
      <span>
        <Text size={28} bold>
          {text}
        </Text>
        <Text size={28} bold color={COLORS.SECONDARY}>
          {contrast}
        </Text>
      </span>
      <Text size={16} bold color={COLORS.TEXT}>
        Selecione o ano abaixo para filtar
      </Text>
    </Container>
  );
};
