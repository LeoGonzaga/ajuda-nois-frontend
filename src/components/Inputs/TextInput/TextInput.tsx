import React, { HTMLInputTypeAttribute } from 'react';

import { Container } from './styles';

export type TextInputProps = {
  width?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  error?: boolean;
  onChange?: (value: any) => void;
  rest?: any;
};

export const TextInput = ({
  width,
  placeholder,
  type,
  value,
  onChange,
  error,
  rest,
}: TextInputProps): JSX.Element => {
  return (
    <Container
      width={width}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={error}
      {...rest}
    />
  );
};
