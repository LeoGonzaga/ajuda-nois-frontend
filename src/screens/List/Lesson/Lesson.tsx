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
    topic: 'Equação do 1º grau',
    content:
      'Em resumo, equação de 1º grau com uma incógnita é uma expressão algébrica que segue o formato ax + b = 0...',
    date: '12/04/22',
  },
];

export const Lesson = (): JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleToggleModal = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  return (
    <Container>
      <ModalContainer
        open={openModal}
        title="Criação de lições"
        handleClose={handleToggleModal}
      >
        <Form />
      </ModalContainer>
      <Flex align="center">
        <div>
          <BackButton route={ROUTES.PANEL} />
        </div>
        <Flex align="center" justify="space-between">
          <Title text="Lições" contrast="" subText="" />
          <SecondaryButton onClick={handleToggleModal}>
            Nova lição
          </SecondaryButton>
        </Flex>
      </Flex>
      <Table data={data} />
    </Container>
  );
};
