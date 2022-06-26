import { FadeInAnimation } from '@themes/animations/animations';
import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  animation: ${FadeInAnimation} 0.5s ease-in;
  padding: 20px;

  a {
    color: #fff;
    margin-top: 20px;
    text-decoration: none;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      height: 42px;
      width: 350px;
      outline: none;
      border: none;
      font-size: 16px;
      border-radius: 6px;
      padding: 0px 15px;
      transition: 0ms;
      border: 1px solid ${COLORS.BLACK};
      &:focus {
        border: 1px solid ${COLORS.SECONDARY};
      }
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  label {
    display: flex;
    align-items: center;
    align-self: flex-start;
    margin-top: 15px;

    p {
      margin-left: 5px;
    }

    input {
      width: 30px;
      height: 30px;
      background-color: red;

      &:checked {
        background-color: ${COLORS.SECONDARY};
      }
    }
  }
`;
