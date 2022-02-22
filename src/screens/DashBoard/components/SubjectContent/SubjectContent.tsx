import React from 'react';

import CircleProgress from '@components/CircleProgress';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container, Row } from './styles';

export const SubjectContent = (): JSX.Element => {
  return (
    <Container>
      <Text>Conteúdo</Text>
      <Row>
        <CircleProgress area="Natureza" color={COLORS.GREEN} value={100} />
        <CircleProgress area="Exatas" color={COLORS.SUBJECT_BLUE} value={75} />
        <CircleProgress area="Linguagens" color={COLORS.RED} value={50} />
        <CircleProgress area="Humanas" color={COLORS.YELLOW} value={25} />
      </Row>
    </Container>
  );
};
