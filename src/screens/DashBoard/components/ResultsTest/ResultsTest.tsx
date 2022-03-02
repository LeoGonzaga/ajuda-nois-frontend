import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import BarChartContainer from '@components/BarChart';
import HorizontalBarChartContainer from '@components/HorizontalBarChart';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Arrow, Container, Wrapper } from './styles';

type Props = {
  type: string;
};

export const ResultsTest = ({ type }: Props): JSX.Element => {
  return (
    <Container type={type}>
      <div>
        <Text bold color={COLORS.BLACK} size={18}>
          Simulados
        </Text>
        <Text size={14}>Média Geral</Text>
      </div>
      <Spacing vertical={10} />
      {type === 'horizontal' ? (
        <Wrapper>
          <Arrow>
            <IoIosArrowBack />
          </Arrow>
          <HorizontalBarChartContainer />
          <Arrow>
            <IoIosArrowForward />
          </Arrow>
        </Wrapper>
      ) : (
        <BarChartContainer />
      )}
    </Container>
  );
};
