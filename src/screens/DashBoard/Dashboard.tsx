import React, { useEffect, useState } from 'react';

import Admin from './Admin';
import Student from './Student';
import Teacher from './Teacher';

export const DashBoard = (): JSX.Element => {
  const [user, setUser] = useState<string>('');

  useEffect(() => {
    const value = localStorage.getItem('user');
    const parseValue = JSON.parse(value || '');
    setUser(parseValue.usertype);
  }, []);

  const dashboardByRole: any = {
    student: <Student />,
    teacher: <Teacher />,
    admin: <Admin />,
  };
  return <>{dashboardByRole[user]}</>;
};
