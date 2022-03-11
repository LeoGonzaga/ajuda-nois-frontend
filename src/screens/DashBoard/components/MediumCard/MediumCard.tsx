import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';

import Flex from '@components/Flex';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container, Focus, Subtext } from './styles';

type Props = {
  value: number;
  indicator: number;
  color: string;
  icon?: React.ComponentProps<any>;
};

export const MediumCard = ({
  color,
  indicator,
  value,
  icon,
}: Props): JSX.Element => {
  return (
    <Container color={color}>
      <Flex direction="row" align="center" justify="space-between">
        <Flex direction="column">
          <Focus color={value > 0 ? color : COLORS.GREEN}>
            <Flex direction="row" align="center" justify="space-between">
              {value} {value == 1 ? 'Aluno' : 'Alunos'}
              {value > 0 ? icon : <RiCheckboxCircleFill />}
            </Flex>
          </Focus>
          <Subtext>
            com rendimento abaixo de <br />
            {indicator}% no último simulado
          </Subtext>
        </Flex>
      </Flex>
    </Container>
  );
};
