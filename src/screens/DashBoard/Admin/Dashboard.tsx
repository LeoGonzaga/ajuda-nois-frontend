/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { FaUsers, FaChalkboardTeacher, FaBook } from 'react-icons/fa';

import SecondaryButton from '@components/Buttons/SecondaryButton';
import Content from '@components/Content';
import Spacing from '@components/Spacing';
import Title from '@components/Title';
import { COLORS } from '@themes/colors';
import { AREAS } from '@utils/functions';
import Router from 'next/router';
import { ROUTES } from 'src/routes/routes';

import AdminChart from '../components/AdminChart';
import BigCard from '../components/BigCard';
import StudentTable from './StudentTable';
import { Column, Container, Controls, Row } from './styles';
import TeacherTable from './TeacherTable';

export const Dashboard = ({ data }: any): JSX.Element => {
  const [value, setValue] = useState();
  const [index, setIndex] = useState(0);

  const handleRedirectToPanel = () => {
    Router.push(ROUTES.PANEL);
  };

  const handleGetSubjectsByTeacher = () => {
    const content = data?.newTeachers?.map((teacher: any) => {
      const areas = teacher?.subjects_info?.map(
        (subject: any) => AREAS[subject.area]
      );
      const subjects = teacher?.subjects_info?.map(
        (subject: any) => subject.name
      );
      return {
        username: teacher.username,
        email: teacher.email,
        fields: areas.toString(),
        subjects: subjects.toString(),
      };
    });

    setValue(content);
  };

  useEffect(() => {
    if (data) {
      handleGetSubjectsByTeacher();
    }
  }, [data]);

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
            value={data?.allMockExams?.length}
            icon={<FaBook />}
          />
        </Row>
        <Spacing vertical={5} />
        <AdminChart handleChangeIndex={setIndex} data={data?.allMockExams} />
        <Spacing vertical={10} />
        <StudentTable />
        <Spacing vertical={10} />
        <TeacherTable size={3} data={value} />
      </Column>
    </Container>
  );
};
