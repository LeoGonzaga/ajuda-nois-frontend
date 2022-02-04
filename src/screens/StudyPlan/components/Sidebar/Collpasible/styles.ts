import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  span {
    cursor: pointer;

    p {
      color: ${COLORS.TEXT};

      transition: color 0.2s;

      &:hover {
        color: ${COLORS.SECONDARY};
      }
    }
  }

  .active {
    p {
      color: ${COLORS.SECONDARY};
    }
  }

  .content {
    width: 100%;
    display: flex;
    align-self: center;

    padding: 5px 10px 10px 10px;
    background-color: ${COLORS.NEUTRAL};
    border-radius: 5px;

    cursor: default;
  }

  /* For animation */
  .wrapper {
    /* height: 0; */
    padding: 0 5px;
    margin-bottom: 0px;
    overflow: hidden;

    transition: all 0.5s;
  }

  .expanded {
    /* height: 250px; */
    margin-bottom: 10px;
  }
`;
