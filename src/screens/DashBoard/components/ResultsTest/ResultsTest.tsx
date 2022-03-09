import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import BarChartContainer from '@components/BarChart';
import HorizontalBarChartContainer from '@components/HorizontalBarChart';
import Spacing from '@components/Spacing';
import SpecificBarChartContainer from '@components/SpecificBarChart';
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
        <Text size={14}>Mês/Período</Text>
      </div>
      <Spacing vertical={10} />
      {type === 'horizontal' ? (
        <Wrapper type="horizontal">
          <Arrow>
            <IoIosArrowBack />
          </Arrow>
          <HorizontalBarChartContainer />
          <Arrow>
            <IoIosArrowForward />
          </Arrow>
        </Wrapper>
      ) : type === 'vertical' ? (
        <BarChartContainer />
      ) : (
        <Wrapper type="specific">
          <Arrow>
            <IoIosArrowBack />
          </Arrow>
          <SpecificBarChartContainer />
          <Arrow>
            <IoIosArrowForward />
          </Arrow>
        </Wrapper>
      )}
    </Container>
  );
};
