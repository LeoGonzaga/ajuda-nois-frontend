import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import Flex from '@components/Flex';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container, Wrapper } from './styles';

type Props = {
  title: string;
  subtitle?: string;
  size: number;
  simSize: number;
  type: string;
  children: React.ReactNode;
};

export const Expandable = ({
  title,
  subtitle,
  size,
  simSize,
  type,
  children,
}: Props): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  // max-height = height conteúdo + height container fechado + paddings tabela + height da linha * nº de linhas
  const expandSize =
    (type == 'admin' ? 0 : 35 * simSize + 500) + 80 + 95 + 26 * size;

  return (
    <Container expanded={expanded} size={expandSize + 'px'} type={type}>
      <Wrapper
        expanded={expanded}
        type={type}
        onClick={() => setExpanded(!expanded)}
      >
        <div>
          <Text bold size={20}>
            {title}
          </Text>
          {!!subtitle && (
            <Text size={14} color={COLORS.TEXT}>
              {subtitle}
            </Text>
          )}
        </div>
        <IoIosArrowBack fontSize={25} />
      </Wrapper>
      {children}
    </Container>
  );
};
