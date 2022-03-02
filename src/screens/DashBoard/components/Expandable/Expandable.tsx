import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import Flex from '@components/Flex';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container } from './styles';

type Props = {
  title: string;
  subtitle: string;
  size: number;
  children: React.ReactNode;
};

export const Expandable: React.FC<Props> = ({
  title,
  subtitle,
  size,
  children,
}: Props) => {
  const [expanded, setExpanded] = useState(false);
  const expandSize = size * 15;

  return (
    <Container
      expanded={expanded}
      size={expandSize + 'px'}
      onClick={() => setExpanded(!expanded)}
    >
      <Flex justify="space-between" align="center">
        <div>
          <Text bold color={COLORS.BLACK} size={20}>
            Simulados
          </Text>
          <Text size={14} color={COLORS.TEXT}>
            Média Geral
          </Text>
        </div>
        <IoIosArrowBack fontSize={25} color={COLORS.TEXT} />
      </Flex>
      {children}
    </Container>
  );
};
