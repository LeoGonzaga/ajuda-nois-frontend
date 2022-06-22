import React from 'react';

import CircleProgress from '@components/CircleProgress';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container, Row } from './styles';

export const SubjectContent = (): JSX.Element => {
  return (
    <Container>
      <Text bold color={COLORS.BLACK} size={18}>
        Taxa de Completude de Aulas
      </Text>
      <Row>
        <CircleProgress
          area="Natureza"
          color={COLORS.GREEN}
          value={100}
          size={150}
        />
        <CircleProgress
          area="Exatas"
          color={COLORS.SUBJECT_BLUE}
          value={75}
          size={150}
        />
        <CircleProgress
          area="Linguagens"
          color={COLORS.RED}
          value={50}
          size={150}
        />
        <CircleProgress
          area="Humanas"
          color={COLORS.YELLOW}
          value={25}
          size={150}
        />
      </Row>
    </Container>
  );
};
