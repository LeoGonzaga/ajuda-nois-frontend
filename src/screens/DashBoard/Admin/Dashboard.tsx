import React from 'react';
import { FaUsers, FaChalkboardTeacher, FaBook } from 'react-icons/fa';

import SecondaryButton from '@components/Buttons/SecondaryButton';
import Title from '@components/Title';
import { COLORS } from '@themes/colors';

import BigCard from '../components/BigCard';
import { Column, Container, Controls, Row } from './styles';

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <Controls>
        <Title text="Dashboard" contrast="" subText="" />
        <SecondaryButton>Configurações</SecondaryButton>
      </Controls>
      <Row>
        <Column>
          <Row>
            <BigCard
              color={COLORS.SUBJECT_BLUE}
              indicator="Alunos"
              value={42}
              icon={<FaUsers />}
            />
            <BigCard
              color={COLORS.GREEN}
              indicator="Professores"
              value={13}
              icon={<FaChalkboardTeacher />}
            />
            <BigCard
              color={COLORS.RED}
              indicator="Simulados"
              value={6}
              icon={<FaBook />}
            />
          </Row>
        </Column>
        {/* <ResultsTest /> */}
      </Row>
    </Container>
  );
};
