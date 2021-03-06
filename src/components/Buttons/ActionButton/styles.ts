import styled from 'styled-components';

import { ActionButtonProps } from './ActionButton';

export const Container = styled.button<ActionButtonProps>`
  height: 45px;
  background-color: ${(props) => (props.color ? props.color : 'initial')};
  width: ${(props) => (props.width ? props.width : 'initial')};
  border-radius: 6px;
  outline: none;
  border: 1px;
  transition: 0.1s;
  font-weight: bold;

  &:disabled {
    background-color: #dddddd;
    cursor: not-allowed;
  }
  &:hover {
    opacity: 0.8;

    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }
`;
