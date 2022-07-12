/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { FaUsers, FaChalkboardTeacher, FaBook } from 'react-icons/fa';

import SecondaryButton from '@components/Buttons/SecondaryButton';
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
  const [allExams, setAllExams] = useState([]);

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

  const sumAllExams = () => {
    console.log(data);
    const exams = data?.newStudents?.map((student: any) => student?.mock_exams);
    const filterEmpyt = exams?.filter((item: any) => item?.length > 0);
    setAllExams(filterEmpyt);

    // const totalHuman = exams?.map((human) => human.human_sciences_score);
    // const totalNatureza = exams?.map((human) => human.natural_sciences_score);
    // const totalMath = exams?.map((human) => human.mathematics_score);
    // const totalLanguage = exams?.map((human) => human.languages_score);

    // const sumHuman = totalHuman?.reduce((partialSum, a) => partialSum + a, 0);
    // const sumNatureza = totalNatureza?.reduce(
    //   (partialSum, a) => partialSum + a,
    //   0
    // );
    // const sumMath = totalMath?.reduce((partialSum, a) => partialSum + a, 0);
    // const sumLanguage = totalLanguage?.reduce(
    //   (partialSum, a) => partialSum + a,
    //   0
    // );

    // console.log(exams);

    // const paylaod = {
    //   human: sumHuman / exams?.length,
    //   natureza: sumNatureza / exams?.length,
    //   math: sumMath / exams?.length,
    //   language: sumLanguage / exams?.length,
    // };

    // console.log(paylaod);

    console.log(filterEmpyt);
  };

  useEffect(() => {
    if (data) {
      handleGetSubjectsByTeacher();
      sumAllExams();
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
            value={data?.allMockExam}
            icon={<FaBook />}
          />
        </Row>
        <Spacing vertical={5} />
        <AdminChart handleChangeIndex={setIndex} data={allExams} />
        <Spacing vertical={10} />
        <StudentTable size={10} data={data?.newStudents} />
        <Spacing vertical={10} />
        <TeacherTable size={3} data={value} />
      </Column>
    </Container>
  );
};
