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
    content: 'Resolva a equação fracionária, sendo x ≠ 0:',
    awnser: 'E',
  },
];
export const Questions = (): JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleToggleModal = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  return (
    <Container>
      <ModalContainer
        open={openModal}
        title="Criação de questão"
        handleClose={handleToggleModal}
      >
        <Form />
      </ModalContainer>
      <Flex align="center">
        <div>
          <BackButton route={ROUTES.PANEL} />
        </div>
        <Flex align="center" justify="space-between">
          <Title text="Questões" contrast="" subText="" />
          <SecondaryButton onClick={handleToggleModal}>
            Nova questão
          </SecondaryButton>
        </Flex>
      </Flex>
      <Table data={data} />
    </Container>
  );
};
