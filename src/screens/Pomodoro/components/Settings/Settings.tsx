import React, { useState } from 'react';
import { BsFillLockFill, BsFillUnlockFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { setWorkTime } from 'src/config/actions/pomodoroTime';
import { RootState } from 'src/config/store';

import { Container, Lock, Selected, TimeButton, Toggle } from './styles';

export const Settings = (): JSX.Element => {
  const dispatch = useDispatch();
  const control = useSelector((state: RootState) => state.pomodoroTime);
  const [timeState, setTimeState] = useState({
    left: true,
    middle: false,
    right: false,
    active: 0,
  });

  function onHandleSetTime(index: number) {
    if (control.modeType === 'work' && (control.isIdle || control.isPaused)) {
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
  }

  console.log(control.modeType, control);
  return (
    <Container>
      <Lock>
        {control.modeType === 'work' && (control.isIdle || control.isPaused) ? (
          <BsFillUnlockFill />
        ) : (
          <BsFillLockFill />
        )}
      </Lock>
      <Toggle>
        <Selected current={timeState.active} />
        <TimeButton active={timeState.left} onClick={() => onHandleSetTime(0)}>
          15:00
        </TimeButton>
        <TimeButton
          active={timeState.middle}
          onClick={() => onHandleSetTime(1)}
        >
          20:00
        </TimeButton>
        <TimeButton active={timeState.right} onClick={() => onHandleSetTime(2)}>
          25:00
        </TimeButton>
      </Toggle>
    </Container>
  );
};
