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
  const { data, getAllAchievements } = useAchievements();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleToggleModal = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  return (
    <Container>
      <ModalContainer
        open={openModal}
        title="Criação de conquista"
        handleClose={handleToggleModal}
      >
        <Form />
      </ModalContainer>
      <Flex align="center">
        <div>
          <BackButton route={ROUTES.PANEL} />
        </div>
        <Flex align="center" justify="space-between">
          <Title text="Conquistas" contrast="" subText="" />
          <SecondaryButton onClick={handleToggleModal}>
            Nova matéria
          </SecondaryButton>
        </Flex>
      </Flex>
      <Table data={data} reload={getAllAchievements} />
    </Container>
  );
};
