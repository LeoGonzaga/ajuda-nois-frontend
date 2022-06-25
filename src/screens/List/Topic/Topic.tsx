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
import { useTopic } from './useTopic';

export const Topic = (): JSX.Element => {
  const { handleToggleModal, openModal, data, getAll, loading, subjects } =
    useTopic();

  return (
    <Container>
      <ModalContainer
        open={openModal}
        title="Criação de tópico"
        handleClose={handleToggleModal}
      >
        <Form onClose={handleToggleModal} reload={getAll} subjects={subjects} />
      </ModalContainer>
      <Flex align="center">
        <div>
          <BackButton route={ROUTES.PANEL} />
        </div>
        <Flex align="center" justify="space-between">
          <Title text="Tópicos" contrast="" subText="" />
          <SecondaryButton onClick={handleToggleModal}>
            Novo tópico
          </SecondaryButton>
        </Flex>
      </Flex>
      <Table data={data} reload={getAll} loading={loading} />
    </Container>
  );
};
