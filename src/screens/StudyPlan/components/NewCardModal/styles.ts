import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;

  color: ${COLORS.TEXT};

  .text-area-wrapper {
    width: 510px;

    padding: 15px 10px 0px 10px;

    border-top: 1px solid ${COLORS.GRAY};
  }

  input,
  select,
  textarea {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 4px 22px 4px 28px;
    margin-left: 5px;

    color: ${COLORS.TEXT};

    border: none;
    border-radius: 3px;

    background-color: ${COLORS.GRAY};
  }

  input[type='time']::-webkit-calendar-picker-indicator {
    display: none;
  }

  input[type='text'] {
    width: 170px;
    padding: 4px 8px;

    &::placeholder {
      color: ${COLORS.TEXT};
    }
  }

  select {
    padding-left: 5px;
    margin-left: 5px;
  }

  textarea {
    width: 100%;

    resize: none;

    padding: 8px;
    margin-left: 0;

    &::placeholder {
      color: ${COLORS.TEXT};
    }
  }

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-top: 20px;
    padding: 0 10px;

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

export const InputError = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 5px;
  margin-bottom: -5px;

  font-size: 12px;
  color: ${COLORS.ERROR};

  svg {
    margin-right: 5px;
  }
`;

export const Bar = styled.div`
  width: 1px;
  height: 28px;

  margin-right: 5px;

  border: none;
  background-color: ${COLORS.GRAY};
`;

export const Wrapper = styled.div`
  width: 510px;

  padding: 15px 10px 0px 10px;

  border-top: 1px solid ${COLORS.GRAY};
`;
