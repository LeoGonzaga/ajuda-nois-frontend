import styled from 'styled-components';

import { ActionButtonProps } from './ActionButton';

export const Container = styled.button<ActionButtonProps>`
  height: 45px;
  background-color: ${(props) => (props.color ? props.color : 'initial')};
  width: ${(props) => (props.width ? props.width : 'initial')};
  border-radius: 6px;
  outline: none;
  border: 1px;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
    box-shadow: ${(props) => (props.color ? props.color : 'initial')} 0px 4px
      15px;
  }
`;
