import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 260px;
  height: 100vh;
  margin-left: 15px;
  border-right: 1px solid ${COLORS.NEUTRAL};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
