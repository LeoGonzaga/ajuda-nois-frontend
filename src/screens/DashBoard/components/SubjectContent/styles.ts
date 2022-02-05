import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${COLORS.NEUTRAL};
  height: 193px;
  margin-top: 10px;
  margin-right: 10px;
  border-radius: 5px;
  padding: 10px;
`;

export const Row = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
