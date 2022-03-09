import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Content = styled.div`
  width: 100%;

  table {
    width: 100%;

    border-spacing: 0 3px;

    font-size: 13px;
    color: ${COLORS.TEXT};

    th {
      text-align: left;

      padding-bottom: 10px;

      transition: color 0.3s ease-in-out;

      &:first-child {
        padding-left: 10px;
        width: 30%;
      }

      &:nth-child(2) {
        width: 30%;
      }

      &:nth-child(3),
      &:nth-child(4) {
        width: 20%;
      }
    }
  }

  tbody {
    tr {
      background-color: transparent;

      transition: background-color 0.5s ease;

      &:hover {
        background-color: ${COLORS.GRAY};
      }
    }

    td {
      color: ${COLORS.WHITE};
      font-weight: bold;
      padding: 5px 0;

      &:first-child {
        padding-left: 10px;
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
      }

      &:last-child {
        padding-right: 10px;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
      }
    }
  }
`;
