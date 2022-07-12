import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 97vh;
  width: 100%;
  padding: 20px;
  overflow-y: auto;
  @media (min-width: 425px) and (max-width: 1023px) {
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;

    button:last-child {
      margin-left: 20px;
    }
  }

  @media (min-width: 425px) and (max-width: 1023px) {
    flex-direction: column;
    margin-bottom: 10px;
    span {
      width: 100%;
      button {
        width: 100%;
        height: 52px;
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;

export const ConfigButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: fit-content;

  padding: 16px 18px;

  font-size: 14px;
  font-weight: bold;
  color: ${COLORS.SECONDARY};

  background-color: transparent;
  border: 1px solid ${COLORS.SECONDARY};
  border-radius: 8px;

  cursor: pointer;

  filter: brightness(0.8);

  &:hover {
    filter: brightness(1);
  }

  svg {
    margin-right: 5px;
    font-size: 10px;
  }

  @media (min-width: 425px) and (max-width: 1023px) {
    background-color: ${COLORS.SECONDARY};
    color: #fff;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 0;

  @media (min-width: 425px) and (max-width: 1023px) {
    display: flex;

    height: 100vh;

    overflow-y: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    display: flex;

    height: 100vh;

    overflow-y: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
