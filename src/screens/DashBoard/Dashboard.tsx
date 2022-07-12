import React, { useEffect, useState } from 'react';

import { handleRedirect } from '@utils/functions';
import { ROUTES } from 'src/routes/routes';

import Admin from './Admin';
import Student from './Student';
import Teacher from './Teacher';
import useDashBoard from './useDashboard';

export const DashBoard = (): JSX.Element => {
  const value = localStorage.getItem('user');
  const [user, setUser] = useState<string>('');
  const { data } = useDashBoard();

  useEffect(() => {
    if (!value) {
      handleRedirect(ROUTES.LOGIN);
    } else {
      const parseValue = JSON?.parse(value || '');
      setUser(parseValue.usertype);
    }
  }, [value]);

  const dashboardByRole: any = {
    student: <Student data={data} />,
    teacher: <Teacher data={data} />,
    admin: <Admin data={data} />,
  };
  return <>{dashboardByRole[user]}</>;
};
