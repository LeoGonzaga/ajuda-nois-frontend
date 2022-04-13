import React, { useState } from 'react';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';

import { Container, PomoButton, PomoIcons, PomoText } from './styles';
export const Timer = (): JSX.Element => {
  const [pause, setPause] = useState(false);
  const value = 66;

  return (
    <Container>
      <CircularProgressbarWithChildren value={value}>
        <PomoButton onClick={() => setPause(!pause)}>
          <PomoText>{value}</PomoText>
          <PomoIcons>
            {pause ? <BsFillPlayFill /> : <BsFillPauseFill />}
          </PomoIcons>
        </PomoButton>
      </CircularProgressbarWithChildren>
    </Container>
  );
};
