import { FadeInAnimation } from '@themes/animations/animations';
import styled from 'styled-components';

export const Container = styled.div`
  width: 220px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.TEXT};

  display: flex;
  flex-direction: column;

  padding: 15px;
  margin: 10px;

  transition: 0.2s;
  animation: ${FadeInAnimation} 0.5s ease-in;
  &:hover {
    border-color: ${({ theme }) => theme.PRIMARY};
  }

  h1 {
    font-size: 18px;
    margin-bottom: 5px;
    text-transform: uppercase;
    color: ${({ color }) => color};
  }

  p {
    font-size: 14px;
  }
`;
