import React, { useState } from 'react';

import { Container, Selected, TimeButton } from './styles';

export const Settings = (): JSX.Element => {
  const [time, setTime] = useState({
    left: true,
    middle: false,
    right: false,
    active: 0,
  });

  function onHandleSetTime(index: number) {
    index == 0
      ? setTime({ left: true, middle: false, right: false, active: 0 })
      : index == 1
      ? setTime({ left: false, middle: true, right: false, active: 1 })
      : setTime({ left: false, middle: false, right: true, active: 2 });
  }

  return (
    <Container>
      <Selected current={time.active} />
      <TimeButton active={time.left} onClick={() => onHandleSetTime(0)}>
        15:00
      </TimeButton>
      <TimeButton active={time.middle} onClick={() => onHandleSetTime(1)}>
        20:00
      </TimeButton>
      <TimeButton active={time.right} onClick={() => onHandleSetTime(2)}>
        25:00
      </TimeButton>
    </Container>
  );
};
