import styled from 'styled-components';

type Props = {
  size?: number;
};

export const Container = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    padding: 5px;
  }
`;

export const Wrapper = styled.div<Props>`
  width: ${(props) => (props.size ? props.size : 110)}px;
  height: ${(props) => (props.size ? props.size : 110)}px;
`;

export const TextWrap = styled.div`
  max-width: 80%;
  word-wrap: break-word;
  text-align: center;
`;
