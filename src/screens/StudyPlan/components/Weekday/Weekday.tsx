import React from 'react';

import SecondaryButton from '@components/Buttons/SecondaryButton';

import { Container } from './styles';

type Props = {
  selectedDays: Date[];
};

export const Weekday: React.FC<Props> = ({ selectedDays }: Props) => {
  return (
    <Container>
      <SecondaryButton>
        DOM <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        }).format(selectedDays[0])}
      </SecondaryButton>
      <SecondaryButton>
        SEG <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        }).format(selectedDays[1])}
      </SecondaryButton>
      <SecondaryButton>
        TER <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        }).format(selectedDays[2])}
      </SecondaryButton>
      <SecondaryButton>
        QUA <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        }).format(selectedDays[3])}
      </SecondaryButton>
      <SecondaryButton>
        QUI <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        }).format(selectedDays[4])}
      </SecondaryButton>
      <SecondaryButton>
        SEX <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        }).format(selectedDays[5])}
      </SecondaryButton>
      <SecondaryButton>
        SAB <br />
        {new Intl.DateTimeFormat('pt-BR', {
          month: '2-digit',
          day: '2-digit',
        }).format(selectedDays[6])}
      </SecondaryButton>
    </Container>
  );
};
