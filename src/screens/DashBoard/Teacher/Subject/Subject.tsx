import React from 'react';
import { IoWarning } from 'react-icons/io5';
import { MdError } from 'react-icons/md';

import Spacing from '@components/Spacing';
import { COLORS } from '@themes/colors';

import Expandable from '../../components/Expandable';
import MediumCard from '../../components/MediumCard';
import ResultsTest from '../../components/ResultsTest';
import TeacherChart from '../../components/TeacherChart';
import TopicContent from '../../components/TopicContent';
import StudentTable from '../StudentTable';
import { Column, Container, Content, Row } from './styles';

type Props = {
  name: string;
  topics: Array<string>;
  lowRate: number;
  mediumRate: number;
  quizRates: Array<number>;
  studentSize: number;
};

export const Subject = ({
  name,
  topics,
  quizRates,
  lowRate,
  mediumRate,
  studentSize,
}: Props): JSX.Element => {
  const simData = 13;

  return (
    <Container>
      <Expandable
        title={name}
        size={studentSize}
        simSize={simData}
        type="teacher"
      >
        <Content>
          <Row>
            <Column>
              <MediumCard
                color={COLORS.RED}
                indicator={lowRate}
                value={3}
                icon={<MdError />}
              />
              <Spacing horizontal={5} vertical={5} />
              <MediumCard
                color={COLORS.YELLOW}
                indicator={mediumRate}
                value={10}
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
          </Row>
        </Content>
        <Spacing vertical={5} />
        <StudentTable
          size={12}
          name={name}
          lowRate={lowRate}
          mediumRate={mediumRate}
        />
        <TeacherChart />
      </Expandable>
    </Container>
  );
};
