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
import { useAchievements } from './useAchievements';

export const Achievements = (): JSX.Element => {
  const { data, getAllAchievements, open, setOpen, loading } =
    useAchievements();

  return (
    <Container>
      <ModalContainer
        open={open}
        title="Criação de conquista"
        handleClose={setOpen}
      >
        <Form onClose={setOpen} reload={getAllAchievements} loading={loading} />
      </ModalContainer>
      <Flex align="center">
        <div>
          <BackButton route={ROUTES.PANEL} />
        </div>
        <Flex align="center" justify="space-between">
          <Title text="Conquistas" contrast="" subText="" />
          <SecondaryButton onClick={setOpen}>Nova conquista</SecondaryButton>
        </Flex>
      </Flex>
      <Table data={data} reload={getAllAchievements} loading={loading} />
    </Container>
  );
};
