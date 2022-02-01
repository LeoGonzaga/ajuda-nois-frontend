import React from 'react';

import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container } from './styles';

type Props = {
  text: string;
  contrast?: string;
  subText?: string;
};

export const Title = ({ text, contrast, subText }: Props) => {
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
      <Text size={15} color={COLORS.TEXT}>
        {subText}
      </Text>
    </Container>
  );
};
