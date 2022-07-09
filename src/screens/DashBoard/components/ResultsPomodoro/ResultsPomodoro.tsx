import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import PieGraph from '@components/PieChart/PieChart';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Center, Circle, Container, Content, Wrapper, Arrow } from './styles';

const monthNames = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

type Props = {
  data: Array<{
    month: number;
    pomodoro: {
      humans_time: number;
      languages_time: number;
      maths_time: number;
      natural_time: number;
    };
  }>;
};

type PropsTime = {
  humans_time: number;
  languages_time: number;
  maths_time: number;
  natural_time: number;
};

export const ResultsPomodoro = ({ data }: Props): JSX.Element => {
  const [index, setIndex] = useState(0);
  const [pomodoro, setPomodoro] = useState([{ name: '', value: 0 }]);
  const [totalTime, setTotalTime] = useState(0);

  const formatValuesToPie = (time: PropsTime) => {
    const payload = [
      { name: 'Matemática e suas Tecnologias', value: time.maths_time },
      { name: 'Ciências Humanas e suas Tecnologias', value: time.humans_time },
      {
        name: 'Linguagem, Códigos e suas Tecnologias',
        value: time.languages_time,
      },
      {
        name: 'Ciências da Natureza e suas Tecnologias',
        value: time.natural_time,
      },
    ];

    setPomodoro(payload);
  };

  const handleTotalTime = () => {
    const keys = data[index]?.pomodoro;
    const arrayValuesToKeys = Object.values(keys);
    const sum = arrayValuesToKeys.reduce((partialSum, a) => partialSum + a, 0);
    setTotalTime(sum);
    formatValuesToPie(keys);
  };

  function prevSim() {
    index > 0 ? setIndex(index - 1) : setIndex(data.length - 1);
  }

  function nextSim() {
    index < data.length - 1 ? setIndex(index + 1) : setIndex(0);
  }

  useEffect(() => {
    if (data?.length > 0) {
      handleTotalTime();
    }
  }, [data, index]);

  return (
    <Container>
      <div>
        <Text bold color={COLORS.BLACK} size={18}>
          Pomodoro
        </Text>
        <Text size={14}>
          Por área do conhecimento: {monthNames[data[index]?.month]}
        </Text>
      </div>
      <Center>
        <Arrow onClick={() => prevSim()}>
          <IoIosArrowBack />
        </Arrow>
        <PieGraph data={pomodoro} />
        <Arrow onClick={() => nextSim()}>
          <IoIosArrowForward />
        </Arrow>
      </Center>
      <Content>
        <Wrapper>
          <div>
            <Circle color={COLORS.SUBJECT_BLUE} />
            <Text>Exatas</Text>
          </div>
          <Text>
            {Math.floor(pomodoro[0]?.value / 60)}h{' '}
            {Math.floor(pomodoro[0]?.value % 60)}
            min ({((pomodoro[0]?.value * 100) / totalTime).toFixed(2)}%)
          </Text>
        </Wrapper>
        <Wrapper>
          <div>
            <Circle color={COLORS.YELLOW} />
            <Text>Humanas</Text>
          </div>
          <Text>
            {Math.floor(pomodoro[1]?.value / 60)}h{' '}
            {Math.floor(pomodoro[1]?.value % 60)}
            min ({((pomodoro[1]?.value * 100) / totalTime).toFixed(2)}%)
          </Text>
        </Wrapper>
        <Wrapper>
          <div>
            <Circle color={COLORS.RED} />
            <Text>Linguagem</Text>
          </div>
          <Text>
            {Math.floor(pomodoro[2]?.value / 60)}h{' '}
            {Math.floor(pomodoro[2]?.value % 60)}
            min ({((pomodoro[2]?.value * 100) / totalTime).toFixed(2)}%)
          </Text>
        </Wrapper>
        <Wrapper>
          <div>
            <Circle color={COLORS.GREEN} />
            <Text>Natureza</Text>
          </div>
          <Text>
            {Math.floor(pomodoro[3]?.value / 60)}h{' '}
            {Math.floor(pomodoro[3]?.value % 60)}
            min ({((pomodoro[3]?.value * 100) / totalTime).toFixed(2)}%)
          </Text>
        </Wrapper>
      </Content>
    </Container>
  );
};
