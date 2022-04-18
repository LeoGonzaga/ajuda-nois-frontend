import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import HorizontalBarChartContainer from '@components/HorizontalBarChart';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Arrow, Container, Wrapper } from './styles';

export const AdminChart = (): JSX.Element => {
  return (
    <Container>
      <div>
        <Text bold color={COLORS.BLACK} size={18}>
          Simulado
        </Text>
        <Text size={14}>Mês/período</Text>
      </div>
      <Spacing vertical={10} />
      <Wrapper>
        <Arrow>
          <IoIosArrowBack />
        </Arrow>
        <HorizontalBarChartContainer />
        <Arrow>
          <IoIosArrowForward />
        </Arrow>
      </Wrapper>
    </Container>
  );
};
