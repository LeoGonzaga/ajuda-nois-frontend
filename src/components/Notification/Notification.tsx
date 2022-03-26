/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { VscChromeClose } from 'react-icons/vsc';

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
  open = false,
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
    <Styles.Container open={false} error={error}>
      <Text>{message}</Text>
      <button onClick={handleClose}>
        <VscChromeClose size={16} color="#fff" />
      </button>
    </Styles.Container>
  );
};
