import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import Spacing from '@components/Spacing';
import SpecificBarChartContainer from '@components/SpecificBarChart';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Arrow, Container, Wrapper } from './styles';

export const TeacherChart = (): JSX.Element => {
  const simData = ['Janeiro de 2022', 'Fevereiro de 2022', 'Março de 2022'];
  const data = [
    [
      {
        name: 'Questão 1',
        acertos: 45,
        uv: 2780,
        amt: 22,
      },
      {
        name: 'Questão 2',
        acertos: 23,
        uv: 3000,
        amt: 22,
      },
      {
        name: 'Questão 3',
        acertos: 33,
        uv: 2000,
        amt: 12,
      },
      {
        name: 'Questão 4',
        acertos: 22,
        uv: 4000,
        amt: 45,
      },
      {
        name: 'Questão 5',
        acertos: 15,
        uv: 2780,
        amt: 22,
      },
      {
        name: 'Questão 6',
        acertos: 3,
        uv: 3000,
        amt: 22,
      },
      {
        name: 'Questão 7',
        acertos: 43,
        uv: 2000,
        amt: 12,
      },
      {
        name: 'Questão 8',
        acertos: 12,
        uv: 4000,
        amt: 45,
      },
      {
        name: 'Questão 9',
        acertos: 5,
        uv: 2780,
        amt: 22,
      },
      {
        name: 'Questão 10',
        acertos: 23,
        uv: 3000,
        amt: 22,
      },
      {
        name: 'Questão 11',
        acertos: 23,
        uv: 2000,
        amt: 12,
      },
      {
        name: 'Questão 12',
        acertos: 20,
        uv: 4000,
        amt: 45,
      },
      {
        name: 'Questão 13',
        acertos: 7,
        uv: 4000,
        amt: 45,
      },
    ],
    [
      {
        name: 'Questão 1',
        acertos: 15,
        uv: 2780,
        amt: 22,
      },
      {
        name: 'Questão 2',
        acertos: 3,
        uv: 3000,
        amt: 22,
      },
      {
        name: 'Questão 3',
        acertos: 30,
        uv: 2000,
        amt: 12,
      },
      {
        name: 'Questão 4',
        acertos: 22,
        uv: 4000,
        amt: 45,
      },
      {
        name: 'Questão 5',
        acertos: 16,
        uv: 2780,
        amt: 22,
      },
      {
        name: 'Questão 6',
        acertos: 10,
        uv: 3000,
        amt: 22,
      },
      {
        name: 'Questão 7',
        acertos: 40,
        uv: 2000,
        amt: 12,
      },
      {
        name: 'Questão 8',
        acertos: 12,
        uv: 4000,
        amt: 45,
      },
      {
        name: 'Questão 9',
        acertos: 25,
        uv: 2780,
        amt: 22,
      },
      {
        name: 'Questão 10',
        acertos: 13,
        uv: 3000,
        amt: 22,
      },
    ],
    [
      {
        name: 'Questão 1',
        acertos: 5,
        uv: 2780,
        amt: 22,
      },
      {
        name: 'Questão 2',
        acertos: 6,
        uv: 3000,
        amt: 22,
      },
      {
        name: 'Questão 3',
        acertos: 7,
        uv: 2000,
        amt: 12,
      },
      {
        name: 'Questão 4',
        acertos: 8,
        uv: 4000,
        amt: 45,
      },
      {
        name: 'Questão 5',
        acertos: 9,
        uv: 2780,
        amt: 22,
      },
      {
        name: 'Questão 6',
        acertos: 10,
        uv: 3000,
        amt: 22,
      },
      {
        name: 'Questão 7',
        acertos: 23,
        uv: 2000,
        amt: 12,
      },
      {
        name: 'Questão 8',
        acertos: 22,
        uv: 4000,
        amt: 45,
      },
      {
        name: 'Questão 9',
        acertos: 21,
        uv: 2780,
        amt: 22,
      },
      {
        name: 'Questão 10',
        acertos: 20,
        uv: 3000,
        amt: 22,
      },
      {
        name: 'Questão 11',
        acertos: 29,
        uv: 2000,
        amt: 12,
      },
      {
        name: 'Questão 12',
        acertos: 30,
        uv: 4000,
        amt: 45,
      },
      {
        name: 'Questão 13',
        acertos: 31,
        uv: 4000,
        amt: 45,
      },
      {
        name: 'Questão 14',
        acertos: 32,
        uv: 4000,
        amt: 45,
      },
      {
        name: 'Questão 15',
        acertos: 40,
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
          Acertos Por Questão
        </Text>
        <Text size={14}> Simulado de {simData[index]}</Text>
      </div>
      <Spacing vertical={10} />
      <Wrapper>
        <Arrow onClick={() => prevSim()}>
          <IoIosArrowBack />
        </Arrow>
        <SpecificBarChartContainer data={data[index]} />
        <Arrow onClick={() => nextSim()}>
          <IoIosArrowForward />
        </Arrow>
      </Wrapper>
    </Container>
  );
};
