/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  BiHomeAlt,
  BiWorld,
  BiRocket,
  BiBrain,
  BiAward,
  BiBook,
} from 'react-icons/bi';
import { BsClockHistory } from 'react-icons/bs';

import { handleRedirect } from '@utils/functions';
import { ROUTES } from 'src/routes/routes';

import Item from './components';
import { Container } from './styles';
import Menu from './components/Menu';
import { RiLogoutCircleLine } from 'react-icons/ri';

export const Sidebar = (): JSX.Element => {
  const [expanded, setExpanded] = useState(true);
  const [dashboard, setDashBoard] = useState<string>('');
  const user = localStorage.getItem('user');

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
  };

  useEffect(() => {
    if (!user) {
      handleRedirect(ROUTES.LOGIN);
    } else {
      const parseUser = JSON?.parse(user || '');
      setDashBoard(parseUser.usertype);
    }
  }, [user]);

  const ACCESS: any = {
    admin: (
      <Item
        text="Admin"
        router={ROUTES.HOME}
        icon={<BiHomeAlt />}
        expanded={expanded}
      />
    ),
    teacher: (
      <Item
        text="Professor"
        router={ROUTES.HOME}
        icon={<BiHomeAlt />}
        expanded={expanded}
      />
    ),
    student: (
      <Item
        text="Inicio"
        router={ROUTES.HOME}
        icon={<BiHomeAlt />}
        expanded={expanded}
      />
    ),
  };

  return (
    <Container expanded={expanded}>
      <div>
        <Menu active={expanded} onClick={handleExpand} />
        {ACCESS[dashboard]}

        <Item
          text="Matérias"
          router={ROUTES.SUBJECT}
          icon={<BiRocket />}
          expanded={expanded}
        />
        <Item
          text="Dicas"
          router={ROUTES.TIPS}
          icon={<BiWorld />}
          expanded={expanded}
        />
        <Item
          active
          text="Provas"
          router={ROUTES.TESTS}
          icon={<BiBrain />}
          expanded={expanded}
        />
        <Item
          text="Quiz"
          router={ROUTES.QUIZ}
          icon={<BsClockHistory />}
          expanded={expanded}
        />

        {dashboard === 'student' && (
          <>
            <Item
              text="Cronograma"
              router={ROUTES.STUDYPLAN}
              icon={<BiBook />}
              expanded={expanded}
            />

            <Item
              text="Conquistas"
              router={ROUTES.ACHIEVEMENTS}
              icon={<BiAward />}
              expanded={expanded}
            />

            <Item
              text="Pomodoro"
              router={ROUTES.POMODORO}
              icon={<BsClockHistory />}
              expanded={expanded}
            />
          </>
        )}
      </div>
      <div onClick={handleLogout}>
        <Item text="Sair" router={ROUTES.LOGIN} expanded={expanded} icon={<RiLogoutCircleLine />}/>
      </div>
    </Container>
  );
};
