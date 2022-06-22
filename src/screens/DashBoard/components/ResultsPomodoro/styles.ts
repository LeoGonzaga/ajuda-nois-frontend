import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 25%;
  height: 400px;
  margin-right: 10px;
  background-color: ${COLORS.NEUTRAL};
  border-radius: 5px;
  padding: 10px;
`;

export const Center = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div``;

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
`;
