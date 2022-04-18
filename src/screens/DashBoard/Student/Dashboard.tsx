import React from 'react';

import { COLORS } from '@themes/colors';

import Card from '../components/Card';
import ResultsPomodoro from '../components/ResultsPomodoro';
import StudentChart from '../components/StudentChart';
import SubjectContent from '../components/SubjectContent';
import Timeline from '../components/Timeline';
import { Column, Container, Row } from './styles';

export const Dashboard = (): JSX.Element => {
  return (
    <Container>
      <Row>
        <Column>
          <Row>
            <Card
              color={COLORS.SECONDARY}
              indicator="P"
              value="0.00"
              text="Conclusão do Plano"
            />
            <Card
              color={COLORS.PRIMARY}
              indicator="Q"
              value="100.00"
              text="Acertos em Quiz"
            />
          </Row>
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
