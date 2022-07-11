import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SecondaryButton from '@components/Buttons/SecondaryButton';
import Spacing from '@components/Spacing';
import moment from 'moment';
import { setDay } from 'src/config/actions/calendar';
import { RootState } from 'src/config/store';

import { Container } from './styles';

export const Weekday = (): JSX.Element => {
  const dispatch = useDispatch();
  const selectedDays = useSelector((state: RootState) => state.calendar);

  const [active, setActive] = useState('');

  const handleClick = (value: string, day: string) => {
    const formated = moment(value).format('YYYY-MM-DD');
    dispatch(setDay(formated));
    setActive(day);
  };

  console.log(active);

  return (
    <Container>
      <SecondaryButton
        active={active === 'DOM'}
        onClick={() => handleClick(selectedDays?.selectedDays[0], 'DOM')}
      >
        DOM <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        })?.format(selectedDays?.selectedDays[0])}
      </SecondaryButton>
      <Spacing vertical={5} />
      <SecondaryButton
        active={active === 'SEG'}
        onClick={() => handleClick(selectedDays?.selectedDays[1], 'SEG')}
      >
        SEG <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        })?.format(selectedDays?.selectedDays[1])}
      </SecondaryButton>
      <Spacing vertical={5} />
      <SecondaryButton
        active={active === 'TER'}
        onClick={() => handleClick(selectedDays?.selectedDays[2], 'TER')}
      >
        TER <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        })?.format(selectedDays?.selectedDays[2])}
      </SecondaryButton>
      <Spacing vertical={5} />
      <SecondaryButton
        active={active === 'QUA'}
        onClick={() => handleClick(selectedDays?.selectedDays[3], 'QUA')}
      >
        QUA <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        })?.format(selectedDays?.selectedDays[3])}
      </SecondaryButton>
      <Spacing vertical={5} />
      <SecondaryButton
        active={active === 'QUI'}
        onClick={() => handleClick(selectedDays?.selectedDays[4], 'QUI')}
      >
        QUI <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        })?.format(selectedDays?.selectedDays[4])}
      </SecondaryButton>
      <Spacing vertical={5} />
      <SecondaryButton
        active={active === 'SEX'}
        onClick={() => handleClick(selectedDays?.selectedDays[5], 'SEX')}
      >
        SEX <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        })?.format(selectedDays?.selectedDays[5])}
      </SecondaryButton>
      <Spacing vertical={5} />
      <SecondaryButton
        active={active === 'SAB'}
        onClick={() => handleClick(selectedDays?.selectedDays[6], 'SAB')}
      >
        SAB <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        })?.format(selectedDays?.selectedDays[6])}
      </SecondaryButton>
    </Container>
  );
};
