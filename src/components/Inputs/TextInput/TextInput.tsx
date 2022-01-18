import React from 'react';

import { Container } from './styles';

export type TextInputProps = {
  width?: string;
  placeholder?: string;
  type?: string;
};

export const TextInput = ({ width, placeholder, type }: TextInputProps) => {
  return <Container width={width} type={type} placeholder={placeholder} />;
};
