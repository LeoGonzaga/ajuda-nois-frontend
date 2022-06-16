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
      image:
        'https://storage.googleapis.com/ajuda-nois.appspot.com/icons/Materias.png',
    },

    {
      name: 'Usuários',
      path: ROUTES.LIST_USERS,
      image:
        'https://storage.googleapis.com/ajuda-nois.appspot.com/icons/Usuario Feminino.png',
    },
    {
      name: 'Conquistas',
      path: ROUTES.LIST_ACHIEVEMENTS,
      image:
        'https://storage.googleapis.com/ajuda-nois.appspot.com/icons/Winner.png',
    },
    {
      name: 'Dicas',
      path: ROUTES.LIST_TIPS,
      image:
        'https://storage.googleapis.com/ajuda-nois.appspot.com/icons/Dicas.png',
    },
    {
      name: 'Questões',
      path: ROUTES.LIST_QUESTIONS,
      image:
        'https://storage.googleapis.com/ajuda-nois.appspot.com/icons/Questões.png',
    },
    {
      name: 'Provas',
      path: ROUTES.LIST_ENEM,
      image:
        'https://storage.googleapis.com/ajuda-nois.appspot.com/icons/Enem.png',
    },
    {
      name: 'Lições',
      path: ROUTES.LIST_LESSON,
      image:
        'https://storage.googleapis.com/ajuda-nois.appspot.com/icons/Lições.png',
    },
    {
      name: 'Tópicos',
      path: ROUTES.LIST_TOPIC,
      image:
        'https://storage.googleapis.com/ajuda-nois.appspot.com/icons/Topicos.png',
    },
    {
      name: 'Quiz',
      path: ROUTES.LIST_QUIZ,
      image:
        'https://storage.googleapis.com/ajuda-nois.appspot.com/icons/Quiz.png',
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
            <Circle background={COLORS.SECONDARY}>
              <img width={140} src={elem?.image} alt="" />
            </Circle>
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
