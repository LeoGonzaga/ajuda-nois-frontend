import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${COLORS.NEUTRAL};
  width: 445px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 42px;
  margin-top: 32px;
  border-radius: 6px;
`;
