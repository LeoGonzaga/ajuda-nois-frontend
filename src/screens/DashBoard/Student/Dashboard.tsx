import React, { useState } from 'react';

import { COLORS } from '@themes/colors';

import Card from '../components/Card';
import ResultsPomodoro from '../components/ResultsPomodoro';
import StudentChart from '../components/StudentChart';
import SubjectContent from '../components/SubjectContent';
import Timeline from '../components/Timeline';
import { Column, Container, Row } from './styles';

export const Dashboard = (): JSX.Element => {
  const [redCards, setRedCards] = useState(1);
  const [greyCards, setGreyCards] = useState(3);
  return (
    <Container>
      <Row>
        <Column>
          <SubjectContent />
        </Column>
        <StudentChart />
      </Row>
      <Row>
        <ResultsPomodoro />
        <Timeline />
      </Row>
    </Container>
  );
};
