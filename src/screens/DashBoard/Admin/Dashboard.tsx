import React from 'react';
import { FaUsers, FaChalkboardTeacher, FaBook } from 'react-icons/fa';

import SecondaryButton from '@components/Buttons/SecondaryButton';
import Spacing from '@components/Spacing';
import Title from '@components/Title';
import { COLORS } from '@themes/colors';
import Router from 'next/router';
import { ROUTES } from 'src/routes/routes';

import AdminChart from '../components/AdminChart';
import BigCard from '../components/BigCard';
import StudentTable from './StudentTable';
import { Column, Container, Controls, Row } from './styles';
import TeacherTable from './TeacherTable';

export const Dashboard = ({ data }: any): JSX.Element => {
  const handleRedirectToPanel = () => {
    Router.push(ROUTES.PANEL);
  };

  return (
    <Container>
      <Controls>
        <Title text="Dashboard" contrast="" subText="" />
        <SecondaryButton onClick={handleRedirectToPanel}>
          Painel de controle
        </SecondaryButton>
      </Controls>
      <Column>
        <Row>
          <BigCard
            color={COLORS.SUBJECT_BLUE}
            indicator="Alunos"
            value={data?.allStudents}
            icon={<FaUsers />}
          />
          <Spacing horizontal={10} />
          <BigCard
            color={COLORS.GREEN}
            indicator="Professores"
            value={data?.allTeachers}
            icon={<FaChalkboardTeacher />}
          />
          <Spacing horizontal={10} />
          <BigCard
            color={COLORS.RED}
            indicator="Simulados"
            value={data?.allMockExam}
            icon={<FaBook />}
          />
        </Row>
        <Spacing vertical={5} />
        <AdminChart />
        <Spacing vertical={10} />
        <StudentTable size={10} data={data?.newStudents} />
        <Spacing vertical={10} />
        <TeacherTable size={3} data={data?.newTeachers} />
      </Column>
    </Container>
  );
};
