import { COLORS } from '@themes/colors';
import styled from 'styled-components';

import { TextInputProps } from './TextInput';

export const Container = styled.input<TextInputProps>`
  height: 42px;
  width: ${(props) => (props.width ? props.width : 'initial')};
  outline: none;
  border: none;
  font-size: 16px;
  border-radius: 6px;
  padding: 0px 15px;
  transition: 0ms;
  border: 1px solid ${(props) => (props.error ? 'red' : COLORS.BLACK)};
  &:focus {
    border: 1px solid ${COLORS.SECONDARY};
  }
`;
