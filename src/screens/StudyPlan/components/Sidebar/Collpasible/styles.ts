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
    display: flex;
    align-self: center;

    width: 100%;
    max-height: 0px;
    overflow: hidden;

    padding: 0px 10px;
    margin-bottom: 0px;

    background-color: ${COLORS.NEUTRAL};
    border-radius: 5px;

    cursor: default;

    transition: max-height 0.3s ease, padding-top 0.3s ease,
      padding-bottom 0.3s ease, margin-bottom 0.3s ease;
  }

  .expanded {
    max-height: 200px;
    padding: 5px 10px;
    margin-bottom: 10px;
  }
`;
