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
import { useEnem } from './useEnem';

export const Enem = (): JSX.Element => {
  const { data, getAll, handleToggleModal, openModal, loading } = useEnem();

  return (
    <Container>
      <ModalContainer
        open={openModal}
        title="Criação de prova"
        handleClose={handleToggleModal}
      >
        <Form onClose={handleToggleModal} reload={getAll} />
      </ModalContainer>
      <Flex align="center">
        <div>
          <BackButton route={ROUTES.PANEL} />
        </div>
        <Flex align="center" justify="space-between">
          <Title text="Provas" contrast="" subText="" />
          <SecondaryButton onClick={handleToggleModal}>
            Nova prova
          </SecondaryButton>
        </Flex>
      </Flex>
      <Table data={data} reload={getAll} loading={loading} />
    </Container>
  );
};
