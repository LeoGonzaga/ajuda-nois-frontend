import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  span {
    cursor: pointer;

    p {
      color: ${COLORS.TEXT};

      transition: color 0.2s;

      &:hover {
        color: ${COLORS.SECONDARY};
      }
    }
  }

  .active {
    p {
      color: ${COLORS.SECONDARY};
    }
  }

  .wrapper {
    padding: 0 5px;
    margin-bottom: 10px;
    overflow: hidden;

    animation: expandAnimation 2s;
  }

  .content {
    display: flex;
    align-self: center;

    padding: 5px 10px;
    background-color: ${COLORS.NEUTRAL};
    border-radius: 5px;
  }
`;
