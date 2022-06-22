import React from 'react';
import { useSelector } from 'react-redux';

import SecondaryButton from '@components/Buttons/SecondaryButton';
import Spacing from '@components/Spacing';
import { RootState } from 'src/config/store';

import { Container } from './styles';

export const Weekday = (): JSX.Element => {
  const selectedDays = useSelector((state: RootState) => state.calendar);
  return (
    <Container>
      <SecondaryButton>
        DOM <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        }).format(selectedDays.selectedDays[0])}
      </SecondaryButton>
      <Spacing vertical={5} />
      <SecondaryButton>
        SEG <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        }).format(selectedDays.selectedDays[1])}
      </SecondaryButton>
      <Spacing vertical={5} />
      <SecondaryButton>
        TER <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        }).format(selectedDays.selectedDays[2])}
      </SecondaryButton>
      <Spacing vertical={5} />
      <SecondaryButton>
        QUA <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        }).format(selectedDays.selectedDays[3])}
      </SecondaryButton>
      <Spacing vertical={5} />
      <SecondaryButton>
        QUI <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        }).format(selectedDays.selectedDays[4])}
      </SecondaryButton>
      <Spacing vertical={5} />
      <SecondaryButton>
        SEX <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        }).format(selectedDays.selectedDays[5])}
      </SecondaryButton>
      <Spacing vertical={5} />
      <SecondaryButton>
        SAB <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        }).format(selectedDays.selectedDays[6])}
      </SecondaryButton>
    </Container>
  );
};
