import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { BiError } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import Modal from 'react-modal';

import Flex from '@components/Flex';
import Spacing from '@components/Spacing';

import { Container, ModalLabel } from './styles';

type ConfigProps = {
  ratesLow: number;
  ratesMedium: number;
};

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  onHandleConfigurations: (rates: ConfigProps) => void;
};

export function ConfigurationsModal({
  isOpen,
  onRequestClose,
  onHandleConfigurations,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ConfigProps>();

  const onSubmit: SubmitHandler<ConfigProps> = (data) => {
    onHandleConfigurations(data);
    onRequestClose();
  };

  return (
    <Modal
      closeTimeoutMS={300}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modalOverlay"
      className="modalContent"
    >
      <Container onSubmit={handleSubmit(onSubmit)}>
        <ModalLabel>
          <span>Configurações</span>
          <IoClose onClick={() => onRequestClose()} />
        </ModalLabel>
      </Container>
    </Modal>
  );
}
