import React, { useCallback, useState } from 'react';

import BackButton from '@components/BackButton';
import SecondaryButton from '@components/Buttons/SecondaryButton';
import Flex from '@components/Flex';
import ModalContainer from '@components/Modal';
import Table from '@components/Table';
import Title from '@components/Title';
import { ROUTES } from 'src/routes/routes';

import Form from './components/Form';
import { Container } from './styles';

export const Users = (): JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleToggleModalCreateUser = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  return (
    <Container>
      <ModalContainer
        open={openModal}
        title="Criação de usuário"
        handleClose={handleToggleModalCreateUser}
      >
        <Form />
      </ModalContainer>
      <div>
        <BackButton route={ROUTES.PANEL} />
      </div>
      <Flex align="center" justify="space-between">
        <Title text="Usuários" contrast="" subText="" />
        <SecondaryButton onClick={handleToggleModalCreateUser}>
          Novo usuário
        </SecondaryButton>
      </Flex>

      <Table />
    </Container>
  );
};
