import { FadeInAnimation } from '@themes/animations/animations';
import styled from 'styled-components';

export const Container = styled.div`
  width: 445px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  animation: ${FadeInAnimation} 0.5s ease-in;
  padding: 20px;

  div {
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 15px;

    p {
      margin-left: 5px;
    }
  }
`;
