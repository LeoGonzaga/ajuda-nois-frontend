import React from 'react';

import CircleProgress from '@components/CircleProgress';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container, Row } from './styles';

type Props = {
  value: {
    natural: number;
    human: number;
    language: number;
    math: number;
  };
};

export const SubjectContent = ({ value }: Props): JSX.Element => {
  return (
    <Container>
      <Text bold color={COLORS.BLACK} size={18}>
        Taxa de Completude de Aulas
      </Text>
      <Row>
        <CircleProgress
          area="Natureza"
          color={COLORS.GREEN}
          value={value?.human || 0}
          size={150}
        />
        <CircleProgress
          area="Exatas"
          color={COLORS.SUBJECT_BLUE}
          value={value.math || 0}
          size={150}
        />
        <CircleProgress
          area="Linguagens"
          color={COLORS.RED}
          value={value.language || 0}
          size={150}
        />
        <CircleProgress
          area="Humanas"
          color={COLORS.YELLOW}
          value={value.human || 0}
          size={150}
        />
      </Row>
    </Container>
  );
};
