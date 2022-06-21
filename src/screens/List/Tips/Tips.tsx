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
import { useTips } from './useTips';

export const Tips = (): JSX.Element => {
  const { data, getAllTips, open, setOpen } = useTips();

  return (
    <Container>
      <ModalContainer open={open} title="Criação de dica" handleClose={setOpen}>
        <Form />
      </ModalContainer>
      <Flex align="center">
        <div>
          <BackButton route={ROUTES.PANEL} />
        </div>
        <Flex align="center" justify="space-between">
          <Title text="Dicas" contrast="" subText="" />
          <SecondaryButton onClick={setOpen}>Nova dica</SecondaryButton>
        </Flex>
      </Flex>
      <Table data={data} reload={getAllTips} />
    </Container>
  );
};
