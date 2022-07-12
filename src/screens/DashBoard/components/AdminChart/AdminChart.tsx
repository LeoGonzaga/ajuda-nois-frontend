import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useDispatch } from 'react-redux';

import HorizontalBarChartContainer from '@components/HorizontalBarChart';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';
import { setStudent } from 'src/config/actions/admin';

import { Arrow, Container, Wrapper } from './styles';

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

    const sumMath =
      totalMaths?.reduce((partialSum: any, a: any) => partialSum + a, 0) / 6;

    const sumHuman =
      totalHuman?.reduce((partialSum: any, a: any) => partialSum + a, 0) / 6;

    const sumNatural =
      totalNatural?.reduce((partialSum: any, a: any) => partialSum + a, 0) / 6;

    const sumLanguage =
      totalLanguage?.reduce((partialSum: any, a: any) => partialSum + a, 0) / 6;

    setContent([
      {
        name: 'Matemática e suas tecnologias',
        acertos: Math.ceil(sumMath),
      },
      {
        name: 'Ciências Humanas e suas tecnologias',
        acertos: Math.ceil(sumHuman),
      },
      {
        name: 'Ciência da Natureza e suas tecnologias',
        acertos: Math.ceil(sumNatural),
      },
      {
        name: 'Linguagens e seus códigos',
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
        <HorizontalBarChartContainer data={content} />
        <Arrow onClick={() => nextSim()}>
          <IoIosArrowForward />
        </Arrow>
      </Wrapper>
    </Container>
  );
};
