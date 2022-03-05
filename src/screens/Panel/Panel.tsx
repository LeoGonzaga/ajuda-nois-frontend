import React from 'react';
import { IoArrowBackSharp } from 'react-icons/io5';

import Text from '@components/Text';
import { handleRedirect } from '@utils/functions';
import { ROUTES } from 'src/routes/routes';

import { Circle, Container, Content, SubjectCards } from './styles';

export const Panel = (): JSX.Element => {
  const items = [
    {
      name: 'Matérias',
      path: ROUTES.EDITOR,
    },

    {
      name: 'Quiz',
      path: ROUTES.ACHIEVEMENTS,
    },
    {
      name: 'Provas',
      path: ROUTES.EDITOR,
    },
    {
      name: 'Conquistas',
      path: ROUTES.EDITOR,
    },
    {
      name: 'Dicas',
      path: ROUTES.EDITOR,
    },
    {
      name: 'Alunos',
      path: ROUTES.EDITOR,
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
      <IoArrowBackSharp size={30} />
      <Content>
        {items?.map((elem, index) => (
          <SubjectCards
            key={index}
            background={COLORS[index]}
            onClick={() => handleRedirect(elem.path)}
          >
            <Circle />
            <Text>{elem.name}</Text>
          </SubjectCards>
        ))}
      </Content>
    </Container>
  );
};
