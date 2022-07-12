import React, { useEffect, useState } from 'react';
import { IoWarning } from 'react-icons/io5';
import { MdError } from 'react-icons/md';

import Spacing from '@components/Spacing';
import { COLORS } from '@themes/colors';

import Expandable from '../../components/Expandable';
import MediumCard from '../../components/MediumCard';
import TeacherChart from '../../components/TeacherChart';
import TopicContent from '../../components/TopicContent';
import StudentTable from '../StudentTable';
import { Button, Column, Container, Content, Row } from './styles';

type Props = {
  name: string;
  topics: Array<string>;
  lowRate: number;
  mediumRate: number;
  quizRates: Array<number>;
  studentSize: number;
  id: string;
  exams: any;
  students: any;
};

export const Subject = ({
  name,
  topics,
  quizRates,
  lowRate,
  mediumRate,
  id,
  exams,
  students,
}: Props): JSX.Element => {
  const [expand, setExpand] = useState(false);

  const handleToggle = () => {
    setExpand(!expand);
  };

  return (
    <Container>
      {/* <Expandable title={name} size={100} simSize={180} type="teacher"> */}
      <Button onClick={handleToggle}>{name}</Button>
      {expand && (
        <>
          <Content>
            {/* <Row>
              <Column>
                <MediumCard
                  color={COLORS.RED}
                  indicator={lowRate}
                  value={5}
                  icon={<MdError />}
                />
                <Spacing horizontal={5} vertical={5} />
                <MediumCard
                  color={COLORS.YELLOW}
                  indicator={mediumRate}
                  value={2}
                  icon={<IoWarning />}
                />
              </Column>
              <Spacing horizontal={5} />
              <TopicContent
                topics={topics}
                quizRates={quizRates}
                lowRate={lowRate}
                mediumRate={mediumRate}
              />
            </Row> */}
          </Content>
          <Spacing vertical={5} />
          <StudentTable
            size={12}
            name={name}
            lowRate={lowRate}
            mediumRate={mediumRate}
            students={students}
            id={id}
          />
          <TeacherChart id={id} exams={exams} student={students} />
        </>
      )}

      {/* </Expandable> */}
    </Container>
  );
};
