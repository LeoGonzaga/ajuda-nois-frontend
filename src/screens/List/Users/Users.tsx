import React, { useCallback } from 'react';

import BackButton from '@components/BackButton';
import SecondaryButton from '@components/Buttons/SecondaryButton';
import Flex from '@components/Flex';
import Table from '@components/Table';
import Title from '@components/Title';
import { ROUTES } from 'src/routes/routes';

import { Container } from './styles';

export const Users = (): JSX.Element => {
  const handleOpenModalCreateUser = useCallback(() => {
    console.log('abrir modal');
  }, []);

  return (
    <Container>
      <div>
        <BackButton route={ROUTES.PANEL} />
      </div>
      <Flex align="center" justify="space-between">
        <Title text="Usuários" contrast="" subText="" />
        <SecondaryButton onClick={handleOpenModalCreateUser}>
          Novo usuário
        </SecondaryButton>
      </Flex>

      <Table />
    </Container>
  );
};
