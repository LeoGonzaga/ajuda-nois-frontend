import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useDispatch } from 'react-redux';

import HorizontalBarChartContainer from '@components/HorizontalBarChart';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';
import { setStudent } from 'src/config/actions/admin';

import { Arrow, Container, Restrainer, Wrapper } from './styles';

export const AdminChart = ({ data }: any): JSX.Element => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(data?.length - 1);
  const [content, setContent] = useState([
    {
      name: '',
      acertos: 0,
    },
    {
      name: '',
      acertos: 0,
    },
    {
      name: '',
      acertos: 0,
    },
    {
      name: '',
      acertos: 0,
    },
  ]);
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1023;

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  function prevSim() {
    index > 0 ? setIndex(index - 1) : setIndex(data.length - 1);
  }

  function nextSim() {
    index < data.length - 1 ? setIndex(index + 1) : setIndex(0);
  }

  const handleSumAreas = () => {
    const formatByArea = data[index]?.users?.map((area: any) => {
      return {
        math: area?.mock_exams[0]?.mathematics_score,
        natural: area?.mock_exams[0]?.natural_sciences_score,
        human: area?.mock_exams[0]?.human_sciences_score,
        language: area?.mock_exams[0]?.languages_score,
      };
    });

    dispatch(setStudent(data[index]?.users));
    const totalMaths = formatByArea?.map((elem: any) => elem.math);
    const totalNatural = formatByArea?.map((elem: any) => elem.natural);
    const totalLanguage = formatByArea?.map((elem: any) => elem.language);
    const totalHuman = formatByArea?.map((elem: any) => elem.human);

    const totalStudents = data[index]?.users?.length;

    const sumMath =
      totalMaths?.reduce((partialSum: any, a: any) => partialSum + a, 0) /
      totalStudents;

    const sumHuman =
      totalHuman?.reduce((partialSum: any, a: any) => partialSum + a, 0) /
      totalStudents;

    const sumNatural =
      totalNatural?.reduce((partialSum: any, a: any) => partialSum + a, 0) /
      totalStudents;

    const sumLanguage =
      totalLanguage?.reduce((partialSum: any, a: any) => partialSum + a, 0) /
      totalStudents;

    setContent([
      {
        name: width <= breakpoint ? 'Exatas' : 'Matemática e suas tecnologias',
        acertos: Math.ceil(sumMath),
      },
      {
        name:
          width <= breakpoint
            ? 'Humanas'
            : 'Ciências Humanas e suas tecnologias',
        acertos: Math.ceil(sumHuman),
      },
      {
        name:
          width <= breakpoint
            ? 'Natureza'
            : 'Ciência da Natureza e suas tecnologias',
        acertos: Math.ceil(sumNatural),
      },
      {
        name: width <= breakpoint ? 'Linguagem' : 'Linguagens e seus códigos',
        acertos: Math.ceil(sumLanguage),
      },
    ]);
  };

  useEffect(() => {
    if (data?.length > 0) {
      setIndex(data?.length - 1);
    }
  }, [data]);

  useEffect(() => {
    if (data?.length > 0) {
      handleSumAreas();
    }
  }, [index, data]);

  return (
    <Container>
      <div>
        <Text bold color={COLORS.BLACK} size={18}>
          Simulado:{' '}
          {data?.length > 0 &&
            data[index]?.date?.split('-').reverse().join('/')}
        </Text>
      </div>
      <Spacing vertical={10} />
      <Wrapper>
        <Arrow onClick={() => prevSim()}>
          <IoIosArrowBack />
        </Arrow>
        <Restrainer>
          <HorizontalBarChartContainer
            small={width <= breakpoint ? true : false}
            data={content}
          />
        </Restrainer>
        <Arrow onClick={() => nextSim()}>
          <IoIosArrowForward />
        </Arrow>
      </Wrapper>
    </Container>
  );
};
