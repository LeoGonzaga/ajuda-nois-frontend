import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 100%;
  width: 100%;

  @media (min-width: 425px) and (max-width: 1023px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

export const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (min-width: 425px) and (max-width: 1023px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    flex-direction: column;
  }
`;

export const Icon = styled.div`
  display: none;

  @media (min-width: 425px) and (max-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    max-width: 50px;
    padding: 5px;
    margin-top: -5px;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    display: none;
  }
`;

export const IconBig = styled.div`
  display: none;

  @media (min-width: 425px) and (max-width: 1023px) {
    display: none;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    padding: 5px 10px;
    height: 51px;
    margin-top: 5px;
    border: 1px solid ${COLORS.SECONDARY};
    border-radius: 8px;
    background-color: transparent;

    font-size: 16px;
    color: ${COLORS.SECONDARY};

    svg {
      margin-right: 15px;
    }
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 170px;
    height: fit-content;

    padding: 12px 18px;

    color: ${COLORS.SECONDARY};
    font-weight: bold;

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
  }

  @media (min-width: 425px) and (max-width: 1023px) {
    /* background-color: red; */
    flex-direction: column;
    justify-content: center;

    & > div > div:first-child {
      width: 100%;
      padding-left: 20px;
      p {
        font-size: 20px;
      }
    }

    button {
      margin-top: 20px;
      width: 100%;
      background-color: ${COLORS.SECONDARY};
      color: #fff;
      font-weight: bold;
      font-size: 16px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 10px;

  width: 100%;
  max-height: 85vh;

  overflow-y: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 425px) and (max-width: 1023px) {
    max-height: 73vh;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;
