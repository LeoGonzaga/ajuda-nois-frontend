import { COLORS } from '@themes/colors';
import styled from 'styled-components';

type TDProps = {
  low: number;
  medium: number;
  value: number | string;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1490px;
  overflow-x: scroll;
  display: flex;
  justify-content: space-between;

  table {
    width: 100%;
    max-width: 1490px;
    border-spacing: 0 3px;

    font-size: 13px;
    color: ${COLORS.TEXT};

    thead {
      th {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        text-align: left;

        transition: color 0.3s ease-in-out;

        div {
          padding: 0 20px;
          text-align: center;
        }

        td {
          text-align: center;
        }

        &:first-child {
          display: inline-block;

          padding-bottom: 15px;
          padding-left: 10px;
          width: 200px;

          left: 0;
          z-index: 1;

          background-color: ${COLORS.NEUTRAL};
        }
      }
    }

    tbody {
      tr {
        background-color: transparent;

        transition: background-color 0.5s ease;

        &:hover {
          background-color: ${COLORS.GRAY};

          td:first-child {
            background-color: ${COLORS.GRAY};
          }
        }
      }

      td {
        padding: 5px 0;

        font-weight: bold;

        text-align: center;

        &:first-child {
          padding-left: 10px;
          border-top-left-radius: 50px;
          border-bottom-left-radius: 50px;

          text-align: left;

          position: -webkit-sticky;
          position: sticky;
          left: 0;

          background-color: ${COLORS.NEUTRAL};

          transition: background-color 0.5s ease;
        }

        &:last-child {
          border-top-right-radius: 50px;
          border-bottom-right-radius: 50px;
        }
      }
    }
  }
`;

export const ColorTD = styled.td<TDProps>`
  color: ${(props) =>
    props.value == '-'
      ? '#FFF'
      : props.value <= props.low
      ? '#CA1E3C'
      : props.value <= props.medium
      ? '#FBBC05'
      : '#FFF'};
`;
