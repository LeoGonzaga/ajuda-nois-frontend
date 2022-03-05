import React from 'react';
import { IoArrowBackSharp } from 'react-icons/io5';

import Text from '@components/Text';
import { handleRedirect } from '@utils/functions';
import { ROUTES } from 'src/routes/routes';

import { BackButton, Circle, Container, Content, SubjectCards } from './styles';

export const Panel = (): JSX.Element => {
  const items = [
    {
      name: 'Matérias',
      path: ROUTES.LIST_SUBJECTS,
    },

    {
      name: 'Quiz',
      path: ROUTES.LIST_QUIZ,
    },
    {
      name: 'Provas',
      path: ROUTES.EDITOR,
    },
    {
      name: 'Conquistas',
      path: ROUTES.ACHIEVEMENTS,
    },
    {
      name: 'Dicas',
      path: ROUTES.EDITOR,
    },
    {
      name: 'Alunos',
      path: ROUTES.LIST_USERS,
    },
    {
      name: 'Notas',
      path: ROUTES.EDITOR,
    },
  ];

  const COLORS = [
    '#822E81',
    '#AA6373',
    '#F0F2A6',
    '#392061',
    '#1A1B25',
    '#AA6373',
    '#F0F2A6',
  ];

  return (
    <Container>
      <div>
        <BackButton>
          <IoArrowBackSharp size={30} />
          <Text>Voltar</Text>
        </BackButton>
      </div>
      <Content>
        {items?.map((elem, index) => (
          <SubjectCards key={index} onClick={() => handleRedirect(elem.path)}>
            <Circle background={COLORS[index]} />
            <Text>{elem.name}</Text>
          </SubjectCards>
        ))}
      </Content>
    </Container>
  );
};
