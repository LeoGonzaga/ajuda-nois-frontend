import React from 'react';

import BackButton from '@components/BackButton';
import SecondaryButton from '@components/Buttons/SecondaryButton';
import Flex from '@components/Flex';
import ModalContainer from '@components/Modal';
import Text from '@components/Text';
import Title from '@components/Title';
import { ROUTES } from 'src/routes/routes';

import Form from './components/Form';
import Table from './components/Table';
import { Container } from './styles';
import { useTopic } from './useTopic';

export const Topic = (): JSX.Element => {
  const {
    setOpen,
    open,
    data,
    getAll,
    loading,
    subjects,
    contentEditabled,
    handleSelectedEditContent,
  } = useTopic();

  return (
    <Container>
      <ModalContainer
        open={open}
        title="Criação de tópico"
        handleClose={setOpen}
      >
        <Form
          onClose={setOpen}
          reload={getAll}
          subjects={subjects}
          editabled={contentEditabled}
        />
      </ModalContainer>
      <Flex align="center">
        <div>
          <BackButton route={ROUTES.PANEL} />
        </div>
        <Flex align="center" justify="space-between">
          <Title text="Tópicos" contrast="" subText="" />
          {subjects?.length > 0 ? (
            <SecondaryButton onClick={setOpen}>Novo tópico</SecondaryButton>
          ) : (
            <Text color="#ccc" size={12}>
              Não há matérias associadas a essa conta
            </Text>
          )}
        </Flex>
      </Flex>
      <Table
        data={data}
        reload={getAll}
        loading={loading}
        handleClick={handleSelectedEditContent}
      />
    </Container>
  );
};
