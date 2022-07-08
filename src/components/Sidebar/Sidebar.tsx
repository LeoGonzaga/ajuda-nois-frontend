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

export const Sidebar = (): JSX.Element => {
  const [dashboard, setDashBoard] = useState<string>('');
  const user = localStorage.getItem('user');


  const handleLogout = () => {
    localStorage.removeItem('token');
  };

  useEffect(() => {
    if (!user) { handleRedirect(ROUTES.LOGIN); }
    else {
      const parseUser = JSON?.parse(user || '');
      setDashBoard(parseUser.usertype);

    }


  }, [user]);

  const ACCESS: any = {
    admin: <Item text="Admin" router={ROUTES.HOME} icon={<BiHomeAlt />} />,
    teacher: (
      <Item text="Professor" router={ROUTES.HOME} icon={<BiHomeAlt />} />
    ),
    student: <Item text="Inicio" router={ROUTES.HOME} icon={<BiHomeAlt />} />,
  };

  return (
    <Container>
      <div>
        {ACCESS[dashboard]}

        <Item text="Matérias" router={ROUTES.SUBJECT} icon={<BiRocket />} />
        <Item text="Dicas" router={ROUTES.TIPS} icon={<BiWorld />} />
        <Item active text="Provas" router={ROUTES.TESTS} icon={<BiBrain />} />
     
        {dashboard === 'student' && (
          <>
            <Item text="Cronograma" router={ROUTES.STUDYPLAN} icon={<BiBook />} />
        
            <Item
              text="Conquistas"
              router={ROUTES.ACHIEVEMENTS}
              icon={<BiAward />}
            />

            <Item
              text="Pomodoro"
              router={ROUTES.POMODORO}
              icon={<BsClockHistory />}
            />

          </>

        )}
      </div>
      <div onClick={handleLogout}>
        <Item text="Sair" router={ROUTES.LOGIN} />

      </div>
    </Container>
  );
};
