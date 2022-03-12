import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import Modal from 'react-modal';

import Flex from '@components/Flex';
import Spacing from '@components/Spacing';
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
    border: 'none',
  },
};
export const ModalContainer = ({
  children,
  open,
  handleClose,
  title = '',
}: Props): JSX.Element => {
  return (
    <Modal
      overlayClassName="modalOverlay"
      isOpen={open}
      onRequestClose={handleClose}
      style={customStyles}
    >
      <Styles.Container>
        <Flex justify="space-between">
          <Styles.BackButton onClick={handleClose}>
            <BiArrowBack size={25} />
          </Styles.BackButton>

          <Text bold size={25}>
            {title}
          </Text>
        </Flex>
        <Spacing vertical={15} />
        {children}
      </Styles.Container>
    </Modal>
  );
};
