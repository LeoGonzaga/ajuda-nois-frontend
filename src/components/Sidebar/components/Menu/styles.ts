import { COLORS } from '@themes/colors';
import styled from 'styled-components';

type Props = {
  active: boolean;
};

export const Container = styled.div<Props>`
  color: ${COLORS.WHITE};
  font-weight: 'bold';
  cursor: pointer;
  border-radius: 9px;
  width: 90%;
  height: 61px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Wrapper = styled.div<Props>`
  svg,
  span {
    margin: 0 14px;
  }
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* width: 100%; */
  /* background-color: red; */

  span {
    width: ${(props) => (props.active ? '120' : '0')}px;
    overflow: hidden;
    transition: width 0.2s ease-in-out;
  }
`;
