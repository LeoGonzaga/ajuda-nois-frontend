import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 25%;
  height: 400px;
  margin-right: 10px;
  background-color: ${COLORS.NEUTRAL};
  border-radius: 5px;
  padding: 10px;

  @media (min-width: 425px) and (max-width: 1023px) {
    width: 100%;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    width: 100%;
  }
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.div<{ color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props?.color};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;

  div {
    display: flex;
    align-items: center;
  }

  p {
    padding-top: 5px;
    padding-left: 10px;
  }

  @media (min-width: 425px) and (max-width: 1023px) {
    width: 100%;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    width: 40%;
  }
`;

export const Arrow = styled.button`
  display: flex;

  /* margin-bottom: 30px; */
  font-size: 30px;
  color: ${COLORS.TEXT};

  border: none;
  background-color: transparent;

  transition: filter 0.3s ease;

  cursor: pointer;
  filter: brightness(0.5);

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    transform: scaleY(1.8);
  }
`;
