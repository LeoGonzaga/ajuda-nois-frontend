import React from 'react';

import SecondaryButton from '@components/Buttons/SecondaryButton';
import Title from '@components/Title';
import { COLORS } from '@themes/colors';

import Card from '../components/Card';
import ResultsPomodoro from '../components/ResultsPomodoro';
import ResultsTest from '../components/ResultsTest';
import SubjectContent from '../components/SubjectContent';
import Timeline from '../components/Timeline';
import { Column, Container, Controls, Row } from './styles';

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <Controls>
        <Title text="Métricas" contrast="" subText="" />
        <SecondaryButton>Configurações</SecondaryButton>
      </Controls>
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
        <ResultsTest type="vertical" />
      </Row>
      <Row>
        <ResultsPomodoro />
        <Timeline />
      </Row>
    </Container>
  );
};
