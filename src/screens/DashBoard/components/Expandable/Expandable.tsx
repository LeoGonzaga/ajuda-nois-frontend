import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import Flex from '@components/Flex';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container, Wrapper } from './styles';

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
  // Container fechado + legenda e paddings + tamanho de cada linha com espaçamento
  const expandSize = 80 + 95 + 26 * size;

  return (
    <Container expanded={expanded} size={expandSize + 'px'}>
      <Wrapper expanded={expanded} onClick={() => setExpanded(!expanded)}>
        <div>
          <Text bold color={COLORS.BLACK} size={20}>
            {title}
          </Text>
          <Text size={14} color={COLORS.TEXT}>
            {subtitle}
          </Text>
        </div>
        <IoIosArrowBack fontSize={25} color={COLORS.TEXT} />
      </Wrapper>
      {children}
    </Container>
  );
};
