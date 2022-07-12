/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import HorizontalBarChartContainer from '@components/HorizontalBarChart';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Arrow, Container, Restrainer, Wrapper } from './styles';

export const StudentChart = ({ data, infos }: any): JSX.Element => {
  const [index, setIndex] = useState(0);
  const [examResult, setExamResult] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1023;

  function prevSim() {
    index > 0 ? setIndex(index - 1) : setIndex(examResult.length - 1);
  }

  function nextSim() {
    index < examResult.length - 1 ? setIndex(index + 1) : setIndex(0);
  }

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  const handleFormatDataToDisplay = () => {
    if (data?.length > 0) {
      const formated = data.map((elem: any) => {
        return [
          {
            name:
              width <= breakpoint ? 'Exatas' : 'Matemática e suas Tecnologias',
            acertos: elem.mathematics_score,
          },
          {
            name:
              width <= breakpoint
                ? 'Humanas'
                : 'Ciências Humanas e suas Tecnologias',
            acertos: elem.human_sciences_score,
          },
          {
            name:
              width <= breakpoint
                ? 'Natureza'
                : 'Ciências da Natureza e suas Tecnologias',
            acertos: elem.natural_sciences_score,
          },
          {
            name:
              width <= breakpoint
                ? 'Linguagem'
                : 'Linguagens, Códigos e suas Tecnologias',
            acertos: elem.languages_score,
          },
        ];
      });
      setExamResult(formated);
    }
  };

  useEffect(() => {
    handleFormatDataToDisplay();
  }, [data]);

  return (
    <Container>
      <div>
        <Text bold color={COLORS.BLACK} size={18}>
          Acertos Por Área do Conhecimento
        </Text>
        <Text size={14}>
          {' '}
          Simulado de {infos[index]?.date?.split('-').reverse().join('-')}
        </Text>
      </div>
      <Spacing vertical={10} />
      <Wrapper>
        <Arrow onClick={() => prevSim()}>
          <IoIosArrowBack />
        </Arrow>
        <Restrainer>
          <HorizontalBarChartContainer
            data={examResult[index]}
            small={width <= breakpoint ? true : false}
          />
        </Restrainer>
        <Arrow onClick={() => nextSim()}>
          <IoIosArrowForward />
        </Arrow>
      </Wrapper>
    </Container>
  );
};
