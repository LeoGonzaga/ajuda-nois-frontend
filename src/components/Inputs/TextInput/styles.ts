import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.input`
  height: 42px;
  width: ${(props) => (props.width ? props.width : 'initial')};
  outline: none;
  border: none;
  font-size: 16px;
  border-radius: 6px;
  padding: 0px 15px;
  transition: 0ms;
  &:focus {
    border: 1px solid ${COLORS.PRIMARY};
  }
`;
