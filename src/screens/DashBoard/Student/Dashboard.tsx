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
          <Row>
            <Card
              color={COLORS.RED}
              indicator="X"
              value={redCards}
              text={
                redCards == 1
                  ? 'Card do plano de estudos atrasado'
                  : 'Cards do plano de estudos atrasados'
              }
            />
            <Card
              color={COLORS.PRIMARY}
              indicator="P"
              value={greyCards}
              text={
                greyCards == 1
                  ? 'Card do plano de estudos preparado para hoje'
                  : 'Cards do plano de estudos preparados para hoje'
              }
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
