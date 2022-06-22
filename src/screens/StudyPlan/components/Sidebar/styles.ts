import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 600px;
  height: 100vh;
  padding: 30px 25px;

  border-left: 1px solid ${COLORS.NEUTRAL};

  .Collapsible {
    color: ${COLORS.SECONDARY};
  }
`;
