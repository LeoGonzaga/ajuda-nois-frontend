import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 100%;
  width: 100%;

  .container {
    display: flex;
    flex-direction: column;

    width: 100%;

    padding: 20px;

    .title-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-bottom: 10px;

      button {
        display: flex;
        justify-content: center;
        align-items: center;

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
    }

    /* .cards-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    } */
  }

  .cards {
    display: flex;
    flex-direction: column;

    margin-top: 10px;

    max-height: 500px;

    overflow-y: scroll;
    scroll-behavior: smooth;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
