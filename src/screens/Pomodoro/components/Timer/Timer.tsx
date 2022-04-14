import React, { useEffect, useState, useRef } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import GradientCircularProgressBar from '@components/GradientCircularProgressBar';
import { setBreakTime } from 'src/config/actions/pomodoroTime';
import { RootState } from 'src/config/store';

import {
  Container,
  PomoButton,
  PomoIcons,
  PomoSubText,
  PomoText,
} from './styles';

export const Timer = (): JSX.Element => {
  const dispatch = useDispatch();
  const selectedTime = useSelector((state: RootState) => state.pomodoroTime);

  const [idle, setIdle] = useState(true);
  const [pause, setPause] = useState(false);
  const [mode, setMode] = useState('work');
  const [cicles, setCicles] = useState(1);
  const [secondsLeft, setSecondsLeft] = useState(0);

  const idleRef = useRef(idle);
  const pauseRef = useRef(pause);
  const modeRef = useRef(mode);
  const ciclesRef = useRef(cicles);
  const secondsLeftRef = useRef(secondsLeft);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds =
    secondsLeft % 60 < 10 ? '0' + (secondsLeft % 60) : secondsLeft % 60;

  const totalSeconds =
    mode === 'work' ? selectedTime.workTime * 60 : selectedTime.breakTime * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const pomoColorL = mode === 'work' ? '#6F52ED' : '#00BF20';
  const pomoColorD = mode === 'work' ? '#6F52ED05' : '#00BF2005';

  function onHandleClick() {
    if (idle) {
      setIdle(false);
      idleRef.current = false;
    } else {
      setPause(!pause);
      pauseRef.current = !pauseRef.current;
    }
  }

  function changeMode() {
    let nextMode;
    let nextTimer;

    if (ciclesRef.current % 4 === 0) {
      dispatch(setBreakTime(15));
    } else {
      dispatch(setBreakTime(5));
    }

    if (modeRef.current === 'work') {
      nextMode = 'break';
      nextTimer = selectedTime.breakTime * 60;
      ciclesRef.current++;
    } else {
      nextMode = 'work';
      nextTimer = selectedTime.workTime * 60;
    }

    setMode(nextMode);
    modeRef.current = nextMode;

    setSecondsLeft(nextTimer);
    secondsLeftRef.current = nextTimer;

    setCicles(ciclesRef.current);
  }

  function initTimer() {
    setSecondsLeft(selectedTime.workTime * 60);
    secondsLeftRef.current = selectedTime.workTime * 60;
  }

  function tickTimer() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    initTimer();

    const interval = setInterval(() => {
      if (idleRef.current || pauseRef.current) {
        return;
      }

      if (secondsLeftRef.current === 0) {
        return changeMode();
      }

      tickTimer();
    }, 1);

    return () => clearInterval(interval);
  }, [selectedTime]);
  return (
    <Container>
      <GradientCircularProgressBar
        startColor={pomoColorL}
        endColor={pomoColorD}
        idCSS="pomodoro"
        rotation={90}
      />
      <CircularProgressbarWithChildren value={percentage}>
        <PomoButton mode={mode} onClick={() => onHandleClick()}>
          <PomoSubText>
            {idle
              ? 'Começar'
              : pause
              ? 'Pausado'
              : mode === 'work'
              ? 'Ativo'
              : 'Descanso'}
          </PomoSubText>
          <PomoText>
            {minutes}:{seconds}
          </PomoText>
          <PomoIcons>
            {idle ? (
              <BsFillPlayFill />
            ) : pause ? (
              <BsFillPlayFill />
            ) : (
              <BsFillPauseFill />
            )}
          </PomoIcons>
        </PomoButton>
      </CircularProgressbarWithChildren>
    </Container>
  );
};
