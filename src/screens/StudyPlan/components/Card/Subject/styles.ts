import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  background-color: ${COLORS.NEUTRAL};

  div {
    width: 100%;

    text-align: center;

    font-size: 16px;
    font-weight: bold;
    color: ${COLORS.TEXT};

    span:first-child {
      color: ${COLORS.TEXT};
    }

    span:last-child {
      color: ${COLORS.WHITE};
    }
  }
`;
