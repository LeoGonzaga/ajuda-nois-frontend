import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import PieGraph from '@components/PieChart/PieChart';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Center, Circle, Container, Content, Wrapper, Arrow } from './styles';

const data = [
  { name: 'Matemática e suas Tecnologias', value: 1085 },
  { name: 'Ciências Humanas e suas Tecnologias', value: 520 },
  { name: 'Linguagem, Códigos e suas Tecnologias', value: 300 },
  { name: 'Ciências da Natureza e suas Tecnologias', value: 1200 },
];
export const ResultsPomodoro = (): JSX.Element => {
  const [humanTime, setHumanTime] = useState('');
  const [mathTime, setMathTime] = useState('');
  const [natureTime, setNatureTime] = useState('');
  const [languageTime, setLanguageTime] = useState('');
  const [index, setIndex] = useState(data.length - 1);

  const totalTime =
    data[0].value + data[1].value + data[2].value + data[3].value;

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
          Pomodoro
        </Text>
        <Text size={14}>Por área do conhecimento</Text>
      </div>
      <Center>
        <Arrow onClick={() => prevSim()}>
          <IoIosArrowBack />
        </Arrow>
        <PieGraph data={data} />
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
            {Math.floor(data[0].value / 60)}h {Math.floor(data[0].value % 60)}
            min ({((data[0].value * 100) / totalTime).toFixed(2)}%)
          </Text>
        </Wrapper>
        <Wrapper>
          <div>
            <Circle color={COLORS.YELLOW} />
            <Text>Humanas</Text>
          </div>
          <Text>
            {Math.floor(data[1].value / 60)}h {Math.floor(data[1].value % 60)}
            min ({((data[1].value * 100) / totalTime).toFixed(2)}%)
          </Text>
        </Wrapper>
        <Wrapper>
          <div>
            <Circle color={COLORS.RED} />
            <Text>Linguagem</Text>
          </div>
          <Text>
            {Math.floor(data[2].value / 60)}h {Math.floor(data[2].value % 60)}
            min ({((data[2].value * 100) / totalTime).toFixed(2)}%)
          </Text>
        </Wrapper>
        <Wrapper>
          <div>
            <Circle color={COLORS.GREEN} />
            <Text>Natureza</Text>
          </div>
          <Text>
            {Math.floor(data[3].value / 60)}h {Math.floor(data[3].value % 60)}
            min ({((data[3].value * 100) / totalTime).toFixed(2)}%)
          </Text>
        </Wrapper>
      </Content>
    </Container>
  );
};
