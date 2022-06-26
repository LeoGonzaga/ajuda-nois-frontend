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
import { useQuiz } from './useQuiz';

export const Quiz = (): JSX.Element => {
  const {
    data,
    getAll,
    handleToggleModal,
    loading,
    openModal,
    setData,
    topics,
  } = useQuiz();

  return (
    <Container>
      <ModalContainer
        open={openModal}
        title="Criação de Quiz"
        handleClose={handleToggleModal}
      >
        <Form onClose={handleToggleModal} reload={getAll} topics={topics} />
      </ModalContainer>
      <Flex align="center">
        <div>
          <BackButton route={ROUTES.PANEL} />
        </div>
        <Flex align="center" justify="space-between">
          <Title text="Quiz" contrast="" subText="" />
          <SecondaryButton onClick={handleToggleModal}>
            Novo quiz
          </SecondaryButton>
        </Flex>
      </Flex>
      <Table data={data} reload={getAll} loading={loading} />
    </Container>
  );
};
