import React from 'react';
import { useSelector } from 'react-redux';

import SecondaryButton from '@components/Buttons/SecondaryButton';
import { RootState } from 'src/config/store';

import { Container } from './styles';

export const Weekday: React.FC = () => {
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
      <SecondaryButton>
        SEG <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        }).format(selectedDays.selectedDays[1])}
      </SecondaryButton>
      <SecondaryButton>
        TER <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        }).format(selectedDays.selectedDays[2])}
      </SecondaryButton>
      <SecondaryButton>
        QUA <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        }).format(selectedDays.selectedDays[3])}
      </SecondaryButton>
      <SecondaryButton>
        QUI <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        }).format(selectedDays.selectedDays[4])}
      </SecondaryButton>
      <SecondaryButton>
        SEX <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        }).format(selectedDays.selectedDays[5])}
      </SecondaryButton>
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
