import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import HorizontalBarChartContainer from '@components/HorizontalBarChart';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Arrow, Container, Wrapper } from './styles';

export const AdminChart = ({ handleChangeIndex, data }: any): JSX.Element => {
  const simData = ['Janeiro de 2022', 'Fevereiro de 2022', 'Março de 2022'];

  const [index, setIndex] = useState(data?.length - 1);

  function prevSim() {
    index > 0 ? setIndex(index - 1) : setIndex(data.length - 1);
  }

  function nextSim() {
    index < data.length - 1 ? setIndex(index + 1) : setIndex(0);
  }

  console.log(data);

  return (
    <Container>
      <div>
        <Text bold color={COLORS.BLACK} size={18}>
          Simulado
        </Text>
        <Text size={14}>{simData[index]}</Text>
      </div>
      <Spacing vertical={10} />
      <Wrapper>
        <Arrow onClick={() => prevSim()}>
          <IoIosArrowBack />
        </Arrow>
        {/* <HorizontalBarChartContainer data={data[0]} /> */}
        <Arrow onClick={() => nextSim()}>
          <IoIosArrowForward />
        </Arrow>
      </Wrapper>
    </Container>
  );
};
