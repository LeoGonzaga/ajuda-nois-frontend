import { COLORS } from '@themes/colors';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${COLORS.GRAY};
`;

const BackButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Styles = {
  Container,
  BackButton,
};
