/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useDispatch } from 'react-redux';

import Spacing from '@components/Spacing';
import SpecificBarChartContainer from '@components/SpecificBarChart';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';
import { setActiveIndex, setQuantity } from 'src/config/actions/admin';

import { Arrow, Container, Wrapper } from './styles';

export const TeacherChart = ({ id, exams, student }: any): JSX.Element => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  function prevSim() {
    index > 0 ? setIndex(index - 1) : setIndex(exams.length - 1);
  }

  function nextSim() {
    index < exams.length - 1 ? setIndex(index + 1) : setIndex(0);
  }

  const formatToDisplay = () => {
    const formatValues = exams[index]?.map((elem: any) => {
      return {
        name: 'Questão ' + elem.question_number,
        acertos: Math.trunc(elem.correct_answers),
        subject_id: elem.subject_id,
      };
    });

    const filter = formatValues?.filter((elem: any) => elem.subject_id === id);
    setData(filter);
    dispatch(setQuantity(filter?.length));
  };

  useEffect(() => {
    if (exams?.length > 0) {
      setIndex(exams.length - 1);
    }
  }, [exams]);

  useEffect(() => {
    formatToDisplay();
    dispatch(setActiveIndex(index));
  }, [index, exams, id]);

  return (
    <Container>
      <div>
        <Text bold color={COLORS.BLACK} size={18}>
          Acertos Por Questão
        </Text>
        <Text size={14}>
          {' '}
          Simulado de{' '}
          {student[0]?.mock_exams[index]?.date?.split('-')?.reverse().join('/')}
        </Text>
      </div>
      <Spacing vertical={10} />
      <Wrapper>
        <Arrow onClick={() => prevSim()}>
          <IoIosArrowBack />
        </Arrow>
        <SpecificBarChartContainer data={data} />
        <Arrow onClick={() => nextSim()}>
          <IoIosArrowForward />
        </Arrow>
      </Wrapper>
    </Container>
  );
};
