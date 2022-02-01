import { COLORS } from '@themes/colors';
import styled from 'styled-components';

import { TextProps } from './Text';

export const Container = styled.p<TextProps>`
  color: ${(props) => (props.color ? props.color : COLORS.BLACK)};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  font-size: ${(props) => (props.size ? `${props.size}px` : '16px')};
  text-align: ${(props) => (props.center ? 'center' : 'initial')};
  padding: 0 5px;
  word-wrap: break-word;
`;
