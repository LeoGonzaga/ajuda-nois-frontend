import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;

  color: ${COLORS.BLACK};
  font-weight: bold;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 95%;

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-top: 25px;
    padding: 0 2px;

    button,
    div {
      font-size: 16px;

      padding: 5px 25px;

      border: none;
      border-radius: 20px;

      font-size: 14px;
      font-weight: bold;
      color: ${COLORS.WHITE};

      background-color: ${COLORS.GRAY};

      cursor: pointer;

      transition: all 0.3s ease-in-out;
    }

    button:hover {
      background-color: ${COLORS.SECONDARY};
    }

    div:hover {
      background-color: ${COLORS.ERROR};
    }
  }
`;

export const ModalLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding-bottom: 5px;

  border-bottom: 2px solid ${COLORS.GRAY};

  span {
    margin-left: 5px;
    font-size: 18px;
  }

  svg {
    margin-right: 5px;

    font-size: 24px;

    cursor: pointer;
    filter: brightness(0.6);

    transition: all 0.3s ease;

    &:hover {
      filter: brightness(1);
    }
  }
`;
