import { COLORS } from '@themes/colors';
import styled from 'styled-components';

import { Props } from './Item';

export const Container = styled.div<Props>`
  background-color: ${(props) => (props.active ? COLORS.NEUTRAL : 'none')};
  color: ${(props) => (props.active ? COLORS.SECONDARY : COLORS.WHITE)};
  cursor: pointer;
  border-radius: 9px;
  width: 90%;
  height: 61px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Wrapper = styled.div`
  svg,
  span {
    margin: 0 16px;
  }
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
