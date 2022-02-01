import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  width: 100%;
  height: 100%;

  /* Share Icons */
  span {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;

    /* Span de display do ícone */
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;

      /* Cor do texto abaixo do botão */
      button + p {
        color: ${COLORS.TEXT};

        transition: color 0.2s;
      }

      button:hover + p {
        color: ${COLORS.SECONDARY};
      }
    }
  }

  /* Share Link */
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;

    margin-top: 10px;
    padding: 10px 15px;

    border: none;
    border-radius: 10px;
    background-color: ${COLORS.NEUTRAL};

    .active {
      margin: 0 10px;

      color: ${COLORS.TEXT};

      transition: color 0.2s;
    }

    &:hover .active {
      color: ${COLORS.SECONDARY};
    }
  }
`;

export const ShareIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: ${COLORS.NEUTRAL};

  transition: background-color 0.2s;

  .active {
    color: ${COLORS.TEXT};

    transition: color 0.2s;
  }

  button:hover & {
    background-color: #88e0ad50;

    .active {
      color: ${COLORS.SECONDARY};
    }
  }
`;

export const NoHeightFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
