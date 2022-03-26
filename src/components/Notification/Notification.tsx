/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import Text from '@components/Text';

import { Styles } from './Styles';

type Props = {
  open: boolean;
  error: boolean;
  autoClose?: number;
  message: string;
  handleClose: () => void;
};
export const Notification = ({
  open,
  handleClose,
  autoClose = 0,
  error,
  message = 'Sua mensagem',
}: Props): JSX.Element => {
  useEffect(() => {
    if (open && autoClose > 0) {
      setTimeout(() => {
        handleClose();
      }, autoClose * 1000);
    }
  }, [open, autoClose]);

  return (
    <Styles.Container open={open} error={error} onClick={handleClose}>
      <Text>{message}</Text>
    </Styles.Container>
  );
};
