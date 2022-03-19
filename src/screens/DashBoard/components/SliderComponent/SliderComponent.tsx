import React from 'react';
import Slider from 'react-input-slider';

import { Container } from './styles';

type Props = {
  axis: 'x' | 'y' | 'xy' | undefined;
  type: string;
  value: number;
  valueMax: number;
  valueMin: number;
  valueStep: number;
  onChange: (value: number) => void;
  onHandleLowRate: (ratesLow: number) => void;
  onHandleMediumRate: (ratesMedium: number) => void;
};

export function SliderComponent({
  axis,
  type,
  valueMax,
  valueMin,
  valueStep,
  onChange,
  value,
  onHandleLowRate,
  onHandleMediumRate,
}: Props): JSX.Element {
  return (
    <Container>
      <Slider
        axis={axis}
        x={value}
        xmax={valueMax}
        xmin={valueMin}
        xstep={valueStep}
        onChange={({ x }) => {
          type == 'ratesLow' ? onHandleLowRate(x) : onHandleMediumRate(x);
          onChange(x);
        }}
        styles={{
          track: {
            width: '100%',
            height: '14px',
            borderRadius: '30px',
            backgroundColor: '#3D3D45',
          },
          active: {
            borderRadius: '30px',
            backgroundColor: type == 'ratesLow' ? '#CA1E3C' : '#FBBC05',
          },
          thumb: {
            width: 22,
            height: 22,
            backgroundColor: '#CED4DA',
          },
          disabled: {
            opacity: 0.5,
          },
        }}
      />
    </Container>
  );
}
