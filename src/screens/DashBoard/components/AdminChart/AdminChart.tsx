import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import HorizontalBarChartContainer from '@components/HorizontalBarChart';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Arrow, Container, Wrapper } from './styles';

export const AdminChart = (): JSX.Element => {
  const simData = ['Janeiro de 2022', 'Fevereiro de 2022', 'Março de 2022'];
  const data = [
    [
      {
        name: 'Ciências Humanas e suas Tecnologias',
        acertos: 15,
        uv: 2780,
        amt: 22,
      },
      {
        name: 'Ciências da Natureza e suas Tecnologias',
        acertos: 33,
        uv: 3000,
        amt: 22,
      },
      {
        name: 'Linguagens, Códigos e suas Tecnologias',
        acertos: 28,
        uv: 2000,
        amt: 12,
      },
      {
        name: 'Matemática e suas Tecnologias',
        acertos: 32,
        uv: 4000,
        amt: 45,
      },
    ],
    [
      {
        name: 'Ciências Humanas e suas Tecnologias',
        acertos: 35,
        uv: 2780,
        amt: 22,
      },
      {
        name: 'Ciências da Natureza e suas Tecnologias',
        acertos: 36,
        uv: 3000,
        amt: 22,
      },
      {
        name: 'Linguagens, Códigos e suas Tecnologias',
        acertos: 8,
        uv: 2000,
        amt: 12,
      },
      {
        name: 'Matemática e suas Tecnologias',
        acertos: 42,
        uv: 4000,
        amt: 45,
      },
    ],
    [
      {
        name: 'Ciências Humanas e suas Tecnologias',
        acertos: 45,
        uv: 2780,
        amt: 22,
      },
      {
        name: 'Ciências da Natureza e suas Tecnologias',
        acertos: 23,
        uv: 3000,
        amt: 22,
      },
      {
        name: 'Linguagens, Códigos e suas Tecnologias',
        acertos: 33,
        uv: 2000,
        amt: 12,
      },
      {
        name: 'Matemática e suas Tecnologias',
        acertos: 22,
        uv: 4000,
        amt: 45,
      },
    ],
  ];

  const [index, setIndex] = useState(data.length - 1);

  function prevSim() {
    index > 0 ? setIndex(index - 1) : setIndex(data.length - 1);
  }

  function nextSim() {
    index < data.length - 1 ? setIndex(index + 1) : setIndex(0);
  }

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
        <HorizontalBarChartContainer data={data[index]} />
        <Arrow onClick={() => nextSim()}>
          <IoIosArrowForward />
        </Arrow>
      </Wrapper>
    </Container>
  );
};
