import React from 'react';
import Modal from 'react-modal';

import { COLORS } from '@themes/colors';

import { Styles } from './styles';

type Props = {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: COLORS.GRAY,
    borderRadius: 8,
  },
};
export const ModalContainer = ({
  children,
  open,
  handleClose,
}: Props): JSX.Element => {
  return (
    <Modal isOpen={open} onRequestClose={handleClose} style={customStyles}>
      <Styles.Container>{children}</Styles.Container>
    </Modal>
  );
};
