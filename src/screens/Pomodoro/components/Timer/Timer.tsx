import React, { useState } from 'react';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';

import GradientCircularProgressBar from '@components/GradientCircularProgressBar';

import { Container, PomoButton, PomoIcons, PomoText } from './styles';
export const Timer = (): JSX.Element => {
  const [pause, setPause] = useState(false);
  const value = 100;

  return (
    <Container>
      <GradientCircularProgressBar
        startColor="#6F52ED"
        endColor="#6F52ED05"
        idCSS="grad"
        rotation={90}
      />
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
