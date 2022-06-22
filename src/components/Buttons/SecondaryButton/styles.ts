import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.button<{
  active?: boolean;
}>`
  border: none;
  outline: none;
  height: 51px;
  background-color: ${(props) =>
    props?.active ? COLORS.SECONDARY : COLORS.GRAY};
  padding: 10px 20px;
  border-radius: 10px;
  margin: 5px;
  transition: 0.1s;
  &:hover {
    box-shadow: inset 0 0 2em ${COLORS.SECONDARY}, 0 0 2em ${COLORS.SECONDARY};
  }
`;
