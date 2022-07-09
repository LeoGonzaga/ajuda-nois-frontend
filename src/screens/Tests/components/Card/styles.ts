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
    color: ${({ color, theme }) =>
      color == '#3D3D45' ? theme.BLACK : theme.TERTIARY};
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  div > p {
    color: ${({ color, theme }) =>
      color == '#3D3D45' ? theme.BLACK : theme.TERTIARY};
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 5px;
  }

  &:hover {
    /* animation: ${ScaleAnimation} 0.2s forwards; */
  }

  @media (min-width: 425px) and (max-width: 1023px) {
    justify-content: center;
    align-items: center;

    width: 175px;

    svg {
      height: 100%;
    }
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    width: 240px;
    div > p {
      font-size: 15px;
    }
  }
`;

export const Flex = styled.div`
  display: flex;

  @media (min-width: 425px) and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;
