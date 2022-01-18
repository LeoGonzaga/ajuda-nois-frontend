import React from 'react';

import { Container } from './styles';

export type TextInputProps = {
  width?: string;
  placeholder?: string;
};

export const TextInput = ({ width, placeholder }: TextInputProps) => {
  return <Container width={width} placeholder={placeholder} />;
};
