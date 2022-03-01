import React from 'react';
import { FaUsers, FaChalkboardTeacher, FaBook } from 'react-icons/fa';

import SecondaryButton from '@components/Buttons/SecondaryButton';
import Spacing from '@components/Spacing';
import Title from '@components/Title';
import { COLORS } from '@themes/colors';

import BigCard from '../components/BigCard';
import ResultsTest from '../components/ResultsTest';
import { Column, Container, Controls, Row } from './styles';

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <Controls>
        <Title text="Dashboard" contrast="" subText="" />
        <SecondaryButton>Configurações</SecondaryButton>
      </Controls>
      <Column>
        <Row>
          <BigCard
            color={COLORS.SUBJECT_BLUE}
            indicator="Alunos"
            value={42}
            icon={<FaUsers />}
          />
          <Spacing horizontal={10} />
          <BigCard
            color={COLORS.GREEN}
            indicator="Professores"
            value={13}
            icon={<FaChalkboardTeacher />}
          />
          <Spacing horizontal={10} />
          <BigCard
            color={COLORS.RED}
            indicator="Simulados"
            value={6}
            icon={<FaBook />}
          />
        </Row>
        <Spacing vertical={5} />
        <ResultsTest type="horizontal" />
      </Column>
    </Container>
  );
};
