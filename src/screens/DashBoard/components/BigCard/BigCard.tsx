import React from 'react';
import { FaForward } from 'react-icons/fa';

import Flex from '@components/Flex';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container, Content, Focus, Wrapper } from './styles';

type Props = {
  indicator: string;
  value: number;
  color: string;
  icon?: React.ComponentProps<any>;
};

export const BigCard = ({
  color,
  indicator,
  value,
  icon,
}: Props): JSX.Element => {
  return (
    <Container color={color}>
      <Content>
        <Flex direction="row" align="center" justify="space-between">
          <Flex direction="column">
            <Focus color={color}>{value}</Focus>
            <Text color={COLORS.WHITE} bold size={20}>
              {indicator}
            </Text>
          </Flex>
          <Wrapper color={color} type={indicator}>
            {icon}
          </Wrapper>
        </Flex>
      </Content>
      <div></div>
    </Container>
  );
};
