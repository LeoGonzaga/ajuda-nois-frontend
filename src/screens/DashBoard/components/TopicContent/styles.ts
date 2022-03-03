import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 10px;
  padding: 10px;

  border-radius: 5px;
  background-color: ${COLORS.NEUTRAL};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;

  padding-bottom: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 510px;
  height: 100%;
  max-height: 160px;
  padding: 25px 10px;

  overflow: hidden;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin: 35px 0;

  font-size: 18px;
  font-weight: bold;
  color: ${COLORS.BLACK};

  filter: brightness(0.7);
`;

export const Arrow = styled.button`
  display: flex;

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
