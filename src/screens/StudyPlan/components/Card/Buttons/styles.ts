import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  font-size: 14px;
  font-weight: bold;
  color: ${COLORS.WHITE};

  div {
    text-align: center;
    padding: 6px 30px;

    border: none;
    border-radius: 20px;

    cursor: pointer;

    background-color: ${COLORS.GRAY};

    transition: background-color 0.2s;

    &:first-child {
      margin-right: 10px;
      background-color: ${COLORS.GRAY};

      &.completed {
        background-color: ${COLORS.SECONDARY};
      }
    }

    &:last-child {
      margin: 0 0 0 auto;

      &:hover {
        background-color: ${COLORS.ERROR};
      }
    }

    &:hover {
      background-color: ${COLORS.PRIMARY};
    }
  }
`;
