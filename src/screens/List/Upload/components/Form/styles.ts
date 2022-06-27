import { COLORS } from '@themes/colors';
import styled from 'styled-components';

const Container = styled.form`
  width: 500px;
  input {
    padding: 10px;
    border: none;
  }
`;

const Wrapper = styled.div`
  background-color: ${COLORS.NEUTRAL};
  padding: 10px;
  p {
    font-size: 12px;
  }
`;

const Download = styled.a`
  background-color: ${({ theme }) => theme.SECONDARY};
  padding: 5px;
  color: #fff;
  margin-right: 10px;
`;

export const Styles = {
  Container,
  Wrapper,
  Download,
};
