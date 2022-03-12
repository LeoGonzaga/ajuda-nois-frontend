import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import Modal from 'react-modal';

import Flex from '@components/Flex';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Styles } from './styles';

type Props = {
  children: React.ReactNode;
  open: boolean;
  title: string;
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
  title = '',
}: Props): JSX.Element => {
  return (
    <Modal isOpen={open} onRequestClose={handleClose} style={customStyles}>
      <Styles.Container>
        <Flex justify="space-between">
          <Styles.BackButton onClick={handleClose}>
            <BiArrowBack size={25} />
          </Styles.BackButton>

          <Text bold size={25}>
            {title}
          </Text>
        </Flex>
        {children}
      </Styles.Container>
    </Modal>
  );
};
