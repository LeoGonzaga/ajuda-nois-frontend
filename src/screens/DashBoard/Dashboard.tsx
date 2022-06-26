import React, { useEffect, useState } from 'react';

import { handleRedirect } from '@utils/functions';
import { ROUTES } from 'src/routes/routes';

import Admin from './Admin';
import Student from './Student';
import Teacher from './Teacher';

export const DashBoard = (): JSX.Element => {
  const [user, setUser] = useState<string>('');

  const value = localStorage.getItem('user');
  useEffect(() => {
    if (!value) {
      handleRedirect(ROUTES.LOGIN);
    } else {
      const parseValue = JSON?.parse(value || '');
      setUser(parseValue.usertype);
    }
  }, [value]);

  const dashboardByRole: any = {
    student: <Student />,
    teacher: <Teacher />,
    admin: <Admin />,
  };
  return <>{dashboardByRole[user]}</>;
};
