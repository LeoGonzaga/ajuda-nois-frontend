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

const data = [
  {
    name: 'Quiz 1',
  },
  {
    name: 'Quiz 2',
  },
  {
    name: 'Quiz 3',
  },
  {
    name: 'Quiz 4',
  },
];

export const Quiz = (): JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleToggleModal = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  return (
    <Container>
      <ModalContainer
        open={openModal}
        title="Criação de Quiz"
        handleClose={handleToggleModal}
      >
        <Form />
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
      <Table data={data} />
    </Container>
  );
};
