import React from 'react';

import BackButton from '@components/BackButton';
import Flex from '@components/Flex';
import Text from '@components/Text';
import Title from '@components/Title';
import { COLORS } from '@themes/colors';
import { handleRedirect } from '@utils/functions';
import { ROUTES } from 'src/routes/routes';

import { Circle, Container, Content, SubjectCards } from './styles';

export const Panel = (): JSX.Element => {
  const items = [
    {
      name: 'Matérias',
      path: ROUTES.LIST_SUBJECTS,
    },

    {
      name: 'Alunos',
      path: ROUTES.LIST_USERS,
    },
  ];

  return (
    <Container>
      <div>
        <BackButton route="/" />
      </div>
      <Flex align="center" justify="space-between">
        <Title text="Painel de controle" contrast="" subText="" />
      </Flex>
      <Content>
        {items?.map((elem, index) => (
          <SubjectCards key={index} onClick={() => handleRedirect(elem.path)}>
            <Circle background={COLORS.PRIMARY} />
            <Text>{elem.name}</Text>
          </SubjectCards>
        ))}
      </Content>
    </Container>
  );
};
