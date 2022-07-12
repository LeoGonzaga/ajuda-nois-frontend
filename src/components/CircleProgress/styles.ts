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

  @media (min-width: 425px) and (max-width: 1023px) {
    &:first-child,
    &:nth-child(2) {
      margin-bottom: 30px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    overflow-y: initial;
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
