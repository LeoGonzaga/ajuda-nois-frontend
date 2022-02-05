import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${COLORS.NEUTRAL};
  margin-top: 10px;
  height: 100%;
  margin-right: 10px;
  border-radius: 5px;
  padding: 10px;
`;

export const Row = styled.div`
  display: flex;
  height: 80%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 10px;
`;
