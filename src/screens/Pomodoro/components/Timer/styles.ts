import { COLORS } from '@themes/colors';
import styled from 'styled-components';

type ModeProps = {
  mode: string;
};

export const PomoText = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 40px;
  font-weight: bold;
`;

export const PomoSubText = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export const PomoIcons = styled.div`
  font-size: 40px;
  margin-top: 10px;
`;

export const PomoButton = styled.button<ModeProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: -12px;
  margin-left: 1px;

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
      color: ${(props) =>
        props.mode === 'work'
          ? `${COLORS.SUBJECT_BLUE}`
          : `${COLORS.SECONDARY}`};
    }
  }
`;

export const Container = styled.div`
  width: 250px;
  height: 250px;

  margin-bottom: 20px;

  border: none;
  border-radius: 100%;

  .CircularProgressbar-path {
    stroke: url(#pomodoro);
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
