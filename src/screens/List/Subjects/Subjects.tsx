import React from 'react';

import BackButton from '@components/BackButton';
import SecondaryButton from '@components/Buttons/SecondaryButton';
import Flex from '@components/Flex';
import ModalContainer from '@components/Modal';
import Title from '@components/Title';
import { ROUTES } from 'src/routes/routes';

import Form from './components/Form';
import Table from './components/Table';
import { Container } from './styles';
import { useSubjects } from './useSubjects';

export const Subjects = (): JSX.Element => {
  const { data, getAllSubjects, open, setOpen, teachers } = useSubjects();
  return (
    <Container>
      <ModalContainer
        open={open}
        title="Criação de matéria"
        handleClose={setOpen}
      >
        <Form teachers={teachers} reload={getAllSubjects} onClose={setOpen} />
      </ModalContainer>

      <Flex align="center">
        <div>
          <BackButton route={ROUTES.PANEL} />
        </div>
        <Flex align="center" justify="space-between">
          <Title text="Matérias" contrast="" subText="" />
          {teachers?.length > 0 && (
            <SecondaryButton onClick={setOpen}>Nova matéria</SecondaryButton>
          )}
        </Flex>
      </Flex>
      <Table data={data} reload={getAllSubjects} />
    </Container>
  );
};
