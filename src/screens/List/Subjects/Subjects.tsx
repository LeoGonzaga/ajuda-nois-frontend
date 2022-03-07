import React from 'react';

import BackButton from '@components/BackButton';
import SecondaryButton from '@components/Buttons/SecondaryButton';
import Flex from '@components/Flex';
import Table from '@components/Table';
import Title from '@components/Title';
import { ROUTES } from 'src/routes/routes';

import { Container } from './styles';

export const Subjects = (): JSX.Element => {
  return (
    <Container>
      <div>
        <BackButton route={ROUTES.PANEL} />
      </div>
      <Flex align="center" justify="space-between">
        <Title text="Matérias" contrast="" subText="" />
        <SecondaryButton onClick={() => console.log('a')}>
          Nova matéria
        </SecondaryButton>
      </Flex>

      <Table />
    </Container>
  );
};
