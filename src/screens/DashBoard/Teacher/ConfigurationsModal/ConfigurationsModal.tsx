import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';
import Modal from 'react-modal';

import Flex from '@components/Flex';
import Spacing from '@components/Spacing';

import SliderComponent from '../../components/SliderComponent';
import { Container, Content, ModalLabel } from './styles';

type ConfigProps = {
  ratesLow: number;
  ratesMedium: number;
};

type Props = {
  isOpen: boolean;
  lowRate: number;
  mediumRate: number;
  onRequestClose: () => void;
  onHandleLowRate: (ratesLow: number) => void;
  onHandleMediumRate: (ratesMedium: number) => void;
};

export function ConfigurationsModal({
  isOpen,
  lowRate,
  mediumRate,
  onRequestClose,
  onHandleLowRate,
  onHandleMediumRate,
}: Props) {
  const { handleSubmit, control } = useForm<ConfigProps>();

  const onSubmit = (data: ConfigProps) => {
    data.ratesMedium =
      data.ratesMedium <= data.ratesLow ? data.ratesLow + 1 : data.ratesMedium;

    onHandleLowRate(data.ratesLow);
    onHandleMediumRate(data.ratesMedium);

    onRequestClose();
  };

  return (
    <Modal
      closeTimeoutMS={300}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modalOverlay"
      className="modalContent"
      style={{ content: { maxWidth: '500px' } }}
    >
      <Container onSubmit={handleSubmit(onSubmit)}>
        <ModalLabel>
          <span>Configurações</span>
          <IoClose onClick={() => onRequestClose()} />
        </ModalLabel>
        <Content>
          <Spacing vertical={10} />
          <Flex direction="column">
            <p>Taxa de acerto para rendimento baixo: 0% à {lowRate}%</p>
            <Controller
              control={control}
              name="ratesLow"
              defaultValue={lowRate}
              render={({ field: { value, onChange } }) => (
                <SliderComponent
                  axis={'x'}
                  type="ratesLow"
                  valueMax={50}
                  valueMin={0}
                  valueStep={1}
                  onChange={onChange}
                  value={value}
                  onHandleLowRate={onHandleLowRate}
                  onHandleMediumRate={onHandleMediumRate}
                />
              )}
            />
          </Flex>
          <Spacing vertical={8} />
          <Flex direction="column">
            <p>
              Taxa de acerto para rendimento médio: {lowRate}% à{' '}
              {mediumRate <= lowRate ? lowRate + 1 : mediumRate}%
            </p>
            <Controller
              control={control}
              name="ratesMedium"
              defaultValue={mediumRate}
              render={({ field: { value, onChange } }) => (
                <SliderComponent
                  axis={'x'}
                  type="ratesMedium"
                  valueMax={75}
                  valueMin={lowRate + 1}
                  valueStep={1}
                  onChange={onChange}
                  value={value}
                  onHandleLowRate={onHandleLowRate}
                  onHandleMediumRate={onHandleMediumRate}
                />
              )}
            />
          </Flex>
          <span>
            <button type="submit">Confirmar</button>
            <div onClick={onRequestClose}>Cancelar</div>
          </span>
        </Content>
      </Container>
    </Modal>
  );
}
