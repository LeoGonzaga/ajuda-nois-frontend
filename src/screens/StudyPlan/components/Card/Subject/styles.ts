import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  background-color: ${COLORS.NEUTRAL};

  div {
    display: flex;
    justify-content: center;

    width: 100%;

    overflow: hidden;

    text-align: center;

    font-size: 16px;
    font-weight: bold;
    color: ${COLORS.TEXT};

    span:first-child {
      margin-right: 5px;

      color: ${COLORS.TEXT};
    }

    span:last-child {
      max-width: 150px;

      color: ${COLORS.WHITE};

      overflow-x: scroll;
      scroll-behavior: smooth;
      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;
