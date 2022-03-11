import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 12px 0;

  color: ${COLORS.TEXT};
  font-weight: bold;
`;
