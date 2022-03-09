/* eslint-disable prettier/prettier */
import React from 'react';
import {
  BiHomeAlt,
  BiWorld,
  BiRocket,
  BiBrain,
  BiBulb,
  BiAward,
  BiBook,
  BiEdit,
} from 'react-icons/bi';

import { ROUTES } from 'src/routes/routes';

import Item from './components';
import { Container } from './styles';

export const Sidebar: React.FC = () => {
  return (
    <Container>
      <div>
        <Item text="Inicio" router={ROUTES.HOME} icon={<BiHomeAlt />} />
        <Item text="Professor" router={ROUTES.TEACHER} icon={<BiHomeAlt />} />
        <Item text="Admin" router={ROUTES.ADMIN} icon={<BiHomeAlt />} />
        <Item text="Matérias" router={ROUTES.SUBJECT} icon={<BiRocket />} />
        <Item text="Dicas" router={ROUTES.TIPS} icon={<BiWorld />} />
        <Item active text="Provas" router={ROUTES.TESTS} icon={<BiBrain />} />
        <Item text="Quiz" router={ROUTES.QUIZ} icon={<BiBulb />} />
        <Item text="Cronograma" router={ROUTES.STUDYPLAN} icon={<BiBook />} />
        <Item
          text="Conquistas"
          router={ROUTES.ACHIEVEMENTS}
          icon={<BiAward />}
        />
        <Item text="Editor" router={ROUTES.EDITOR} icon={<BiEdit />} />
      </div>
      <Item text="Sair" router={ROUTES.LOGIN} />
    </Container>
  );
};
