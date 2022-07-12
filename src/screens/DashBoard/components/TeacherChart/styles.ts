import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-height: '';

  margin-top: 10px;
  margin-left: 0px;
  padding: 15px;

  border-radius: 5px;
  background-color: ${COLORS.NEUTRAL};
`;

export const Restrainer = styled.div`
  width: 1450px;
  height: 100%;

  @media (min-width: 425px) and (max-width: 1023px) {
    width: 280px;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0px;
`;

export const Arrow = styled.button`
  display: flex;

  margin-bottom: 30px;

  font-size: 30px;
  color: ${COLORS.TEXT};

  border: none;
  background-color: transparent;

  transition: filter 0.3s ease;

  cursor: pointer;
  filter: brightness(0.5);

  &:first-child {
    padding-right: 5px;
  }

  &:last-child {
    padding-left: 5px;
  }

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    transform: scaleY(1.8);
  }
`;
