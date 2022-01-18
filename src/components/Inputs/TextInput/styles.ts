import styled from 'styled-components';

export const Container = styled.input`
  height: 42px;
  width: ${(props) => (props.width ? props.width : 'initial')};
  outline: none;
  border: none;
  margin: 14px;
  border-radius: 6px;
  padding: 0px 15px;
`;
