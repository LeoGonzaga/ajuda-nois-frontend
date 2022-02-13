import { FadeInAnimation, ScaleAnimation } from '@themes/animations/animations';
import styled from 'styled-components';

export const Container = styled.div<{ color: string }>`
  border: 1px solid ${({ color }) => color};
  background-color: ${({ color }) => color};
  border-radius: 5px;
  width: 240px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 5px;
  color: ${({ theme }) => theme.TERTIARY};
  animation: ${FadeInAnimation} 0.5s ease-in;
  svg {
    height: 100%;
  }

  a {
    color: ${({ theme }) => theme.TERTIARY};
    font-size: 15px;
  }

  div > p {
    text-transform: uppercase;
    font-weight: bold;
  }

  &:hover {
    /* animation: ${ScaleAnimation} 0.2s forwards; */
  }
`;
