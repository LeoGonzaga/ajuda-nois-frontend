import Flex from '@components/Flex';
import { COLORS } from '@themes/colors';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';

import CurrentDate from './CurrentDate';
import Months from './Months';
import { Container, Row } from './styles';

type Props = {
  open: boolean;
  onRequestClose: () => void;
};

export const SidebarModal = ({ open, onRequestClose }: Props): JSX.Element => {
  return (
    <Modal
      closeTimeoutMS={300}
      isOpen={open}
      onRequestClose={onRequestClose}
      overlayClassName="modalOverlay"
      className="modalContent"
    >
      <Container>
        <Row>
          <CurrentDate />
          <AiOutlineClose
            size={30}
            color={COLORS.TEXT}
            onClick={onRequestClose}
          />
        </Row>
        <Months />
      </Container>
    </Modal>
  );
};
