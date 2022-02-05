import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${COLORS.NEUTRAL};
  height: 85px;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  margin-right: 10px;
`;

export const Circle = styled.div`
  min-height: 60px;
  min-width: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.SECONDARY};
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 30px;
    font-weight: bold;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
