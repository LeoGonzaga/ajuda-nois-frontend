import { COLORS } from '@themes/colors';
import styled from 'styled-components';

type TimeProps = {
  active: boolean;
};

type SelectedProps = {
  current: number;
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 45px;
  padding: 5px 0;
  margin-top: 15px;

  border-radius: 125px;

  background-color: ${COLORS.NEUTRAL};

  position: relative;
  z-index: 1;
`;

export const Selected = styled.div<SelectedProps>`
  width: 90px;
  height: inherit;

  background-color: ${COLORS.SUBJECT_BLUE};
  border-radius: 45px;

  position: absolute;
  z-index: 2;
  left: 0px;
  transform: translateX(${(props) => props.current * 90}px);

  transition: 200ms;
`;

export const TimeButton = styled.button<TimeProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90px;
  height: inherit;
  padding: 0 20px;

  font-size: 18px;

  border: none;
  border-radius: 200px;

  background-color: ${(props) =>
    props.active ? `${COLORS.SUBJECT_BLUE}` : 'transparent'};

  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.active ? `transparent` : `${COLORS.GRAY}`};
  }

  z-index: 3;
`;
