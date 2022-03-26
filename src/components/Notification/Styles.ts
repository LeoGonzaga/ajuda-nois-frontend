import {
  FadeInAnimation,
  LeftToRightAnimtion,
} from '@themes/animations/animations';
import styled from 'styled-components';

type Props = {
  open: boolean;
  error: boolean;
};

const Container = styled.div<Props>`
  z-index: 21 !important;
  position: absolute;
  top: 30px;
  left: 100px;
  display: 'none';
  align-items: center;
  background-color: ${(props) => (props.error ? '#f27457' : '#47C2A6')};
  height: 52px;
  border-radius: 5px;
  padding: 18px 20px;
  animation: ${LeftToRightAnimtion} 0.4s ease-in-out,
    ${FadeInAnimation} 0.4s ease-in-out;
  p {
    font-weight: 700;
    font-size: 12px;
    color: #ffffff;
    padding-right: 13px;
  }
  button {
    background-color: transparent;
    padding: 5px;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export const Styles = {
  Container,
};
