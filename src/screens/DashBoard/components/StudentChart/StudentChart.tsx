import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Arrow, Container, Wrapper } from './styles';
import HorizontalBarChartContainer from '@components/HorizontalBarChart';

export const StudentChart = (): JSX.Element => {
  const simData = ['Janeiro de 2022', 'Fevereiro de 2022', 'Março de 2022'];
  const data = [
    [
      {
        name: 'Ciências Humanas e suas Tecnologias',
        uv: 2780,
        acertos: 22,
        amt: 22,
      },
      {
        name: 'Ciências da Natureza e suas Tecnologias',
        uv: 3000,
        acertos: 23,
        amt: 22,
      },
      {
        name: 'Linguagens, Códigos e suas Tecnologias',
        uv: 2000,
        acertos: 33,
        amt: 12,
      },
      {
        name: 'Matemática e suas Tecnologias',
        uv: 4000,
        acertos: 45,
        amt: 45,
      },
    ],
    [
      {
        name: 'Ciências Humanas e suas Tecnologias',
        uv: 4000,
        acertos: 35,
        amt: 45,
      },
      {
        name: 'Ciências da Natureza e suas Tecnologias',
        uv: 3000,
        acertos: 3,
        amt: 22,
      },
      {
        name: 'Linguagens, Códigos e suas Tecnologias',
        uv: 2000,
        acertos: 23,
        amt: 12,
      },
      {
        name: 'Matemática e suas Tecnologias',
        uv: 2780,
        acertos: 42,
        amt: 22,
      },
    ],
    [
      {
        name: 'Ciências Humanas e suas Tecnologias',
        uv: 4000,
        acertos: 40,
        amt: 45,
      },
      {
        name: 'Ciências da Natureza e suas Tecnologias',
        uv: 3000,
        acertos: 27,
        amt: 22,
      },
      {
        name: 'Linguagens, Códigos e suas Tecnologias',
        uv: 2000,
        acertos: 30,
        amt: 12,
      },
      {
        name: 'Matemática e suas Tecnologias',
        uv: 2780,
        acertos: 12,
        amt: 22,
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
          Acertos Por Área do Conhecimento
        </Text>
        <Text size={14}> Simulado de {simData[index]}</Text>
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
