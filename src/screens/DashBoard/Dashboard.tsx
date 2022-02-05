import React from 'react';

import Title from '@components/Title';
import { COLORS } from '@themes/colors';

import Card from './components/Card';
import ResultsPomodoro from './components/ResultsPomodoro';
import ResultsTest from './components/ResultsTest';
import SubjectContent from './components/SubjectContent';
import Timeline from './components/Timeline';
import { Column, Container, Row } from './styles';

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <div>
        <Title text="Métricas" contrast="" subText="" />
      </div>
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
        <ResultsTest />
      </Row>
      <Row>
        <ResultsPomodoro />
        <Timeline />
      </Row>
    </Container>
  );
};
