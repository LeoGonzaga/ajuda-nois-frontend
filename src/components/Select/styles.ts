import { COLORS } from '@themes/colors';
import styled from 'styled-components';

const Container = styled.select`
  width: 100%;
  height: 45px;
  background-color: ${COLORS.NEUTRAL};
  color: #fff;

  outline: none;
  border: none;
  font-size: 16px;
  border-radius: 6px;
  padding: 0px 15px;
  transition: 0ms;
  border: 1px solid ${COLORS.BLACK};
  text-transform: capitalize;
  &:focus {
    border: 1px solid ${COLORS.SECONDARY};
  }
`;

export const Styles = {
  Container,
};
