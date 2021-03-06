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
import { useLesson } from './useLesson';

export const Lesson = (): JSX.Element => {
  const {
    data,
    getAll,
    setOpen,
    loading,
    open,
    topics,
    subjectsByTeacher,
    contentEditabled,
    handleSelectedEditContent,
  } = useLesson();

  return (
    <Container>
      <ModalContainer
        open={open}
        title="Criação de lições"
        handleClose={setOpen}
      >
        <Form
          onClose={setOpen}
          reload={getAll}
          topics={topics}
          subjectsByTeacher={subjectsByTeacher}
          editabled={contentEditabled}
        />
      </ModalContainer>
      <Flex align="center">
        <div>
          <BackButton route={ROUTES.PANEL} />
        </div>
        <Flex align="center" justify="space-between">
          <Title text="Lições" contrast="" subText="" />
          <SecondaryButton onClick={setOpen}>Nova lição</SecondaryButton>
        </Flex>
      </Flex>
      <Table
        data={data}
        reload={getAll}
        loading={loading}
        handleClick={handleSelectedEditContent}
      />
    </Container>
  );
};
