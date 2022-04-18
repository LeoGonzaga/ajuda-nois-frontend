import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Notification from '@components/Notification';
import { RootState } from 'src/config/store';

import { Container } from './styles';

type Props = {
  children: React.ReactNode;
};

export const Content = ({ children }: Props): JSX.Element => {
  const notification = useSelector(
    (state: RootState) => state.notification.notification
  );

  const [showNotification, setShowNotification] = useState<any>();

  useEffect(() => {
    setShowNotification(notification.open);
  }, [notification]);

  const handleClose = () => {
    setShowNotification(false);
  };

  return (
    <Container>
      <Notification
        open={showNotification}
        error={notification.error}
        autoClose={notification.autoClose}
        message={notification.message}
        handleClose={handleClose}
      />
      {children}
    </Container>
  );
};
