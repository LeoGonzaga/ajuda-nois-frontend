import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  height: 100vh;
  padding: 30px 25px;

  border-left: 1px solid ${COLORS.NEUTRAL};

  .Collapsible {
    color: ${COLORS.SECONDARY};
  }

  @media (min-width: 425px) and (max-width: 1023px) {
    height: 90vh;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    height: 90vh;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  padding: 0 5px;

  svg {
    margin-top: -5px;
  }
`;
