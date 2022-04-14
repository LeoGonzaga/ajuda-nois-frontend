import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setWorkTime } from 'src/config/actions/pomodoroTime';

import { Container, Selected, TimeButton } from './styles';

export const Settings = (): JSX.Element => {
  const dispatch = useDispatch();
  const [timeState, setTimeState] = useState({
    left: true,
    middle: false,
    right: false,
    active: 0,
  });

  function onHandleSetTime(index: number) {
    if (index == 0) {
      setTimeState({ left: true, middle: false, right: false, active: 0 });
      dispatch(setWorkTime(15));
    } else if (index == 1) {
      setTimeState({ left: false, middle: true, right: false, active: 1 });
      dispatch(setWorkTime(20));
    } else if (index == 2) {
      setTimeState({ left: false, middle: false, right: true, active: 2 });
      dispatch(setWorkTime(25));
    }
  }

  return (
    <Container>
      <Selected current={timeState.active} />
      <TimeButton active={timeState.left} onClick={() => onHandleSetTime(0)}>
        15:00
      </TimeButton>
      <TimeButton active={timeState.middle} onClick={() => onHandleSetTime(1)}>
        20:00
      </TimeButton>
      <TimeButton active={timeState.right} onClick={() => onHandleSetTime(2)}>
        25:00
      </TimeButton>
    </Container>
  );
};
