import React, { useCallback, useState } from 'react';

import BackButton from '@components/BackButton';
import SecondaryButton from '@components/Buttons/SecondaryButton';
import Flex from '@components/Flex';
import ModalContainer from '@components/Modal';
import Title from '@components/Title';
import { ROUTES } from 'src/routes/routes';

import Form from './components/Form';
import Table from './components/Table';
import { Container } from './styles';
import { useQuestions } from './useQuestions';

const data = [
  {
    content: 'Resolva a equação fracionária, sendo x ≠ 0:',
    awnser: 'E',
  },
];
export const Questions = (): JSX.Element => {
  const { data, getAll, loading, open, setOpen } = useQuestions();
  return (
    <Container>
      <ModalContainer
        open={open}
        title="Criação de questão"
        handleClose={setOpen}
      >
        <Form />
      </ModalContainer>
      <Flex align="center">
        <div>
          <BackButton route={ROUTES.PANEL} />
        </div>
        <Flex align="center" justify="space-between">
          <Title text="Questões" contrast="" subText="" />
          <SecondaryButton onClick={setOpen}>Nova questão</SecondaryButton>
        </Flex>
      </Flex>
      <Table data={data} />
    </Container>
  );
};
