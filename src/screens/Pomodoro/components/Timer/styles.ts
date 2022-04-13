import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const PomoText = styled.div`
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 40px;
  font-weight: bold;
`;

export const PomoIcons = styled.div`
  font-size: 40px;
`;

export const PomoButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 213px;
  height: 213px;

  border: none;
  border-radius: 100%;

  cursor: pointer;

  background-color: transparent;

  ${PomoIcons} {
    transition: all 0.3s ease;
  }

  &:hover {
    ${PomoIcons} {
      color: ${COLORS.SUBJECT_BLUE};
    }
  }
`;

export const Container = styled.div`
  width: 250px;
  height: 250px;

  border: none;
  border-radius: 100%;

  .CircularProgressbar-path {
    stroke: ${COLORS.SUBJECT_BLUE};
    stroke-width: 7;
    stroke-linecap: round;
  }

  .CircularProgressbar-trail {
    stroke: ${COLORS.NEUTRAL};
    stroke-width: 7;
  }

  .CircularProgressbar-background {
    fill: ${COLORS.NEUTRAL};
  }

  .CircularProgressbar {
    border-radius: 100%;
  }
`;
