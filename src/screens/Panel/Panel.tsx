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
      name: 'Usuários',
      path: ROUTES.LIST_USERS,
    },
    {
      name: 'Conquistas',
      path: ROUTES.LIST_ACHIEVEMENTS,
    },
    {
      name: 'Dicas',
      path: ROUTES.LIST_TIPS,
    },
    {
      name: 'Questões',
      path: ROUTES.LIST_QUESTIONS,
    },
    {
      name: 'Provas',
      path: ROUTES.LIST_ENEM,
    },
    {
      name: 'Lições',
      path: ROUTES.LIST_LESSON,
    },
    {
      name: 'Tópicos',
      path: ROUTES.LIST_TOPIC,
    },
    {
      name: 'Quiz',
      path: ROUTES.LIST_QUIZ,
    },
  ];

  return (
    <Container>
      <Flex justify="space-between" width="100%">
        <div>
          <BackButton route="/" />
        </div>
        <Flex align="center" justify="space-between">
          <Title text="Painel de controle" contrast="" subText="" />
        </Flex>
      </Flex>
      <Content>
        {items?.map((elem, index) => (
          <SubjectCards key={index} onClick={() => handleRedirect(elem.path)}>
            <Circle background={COLORS.PRIMARY} />
            <div>
              <Text bold size={18}>
                {elem.name}
              </Text>
            </div>
          </SubjectCards>
        ))}
      </Content>
    </Container>
  );
};
