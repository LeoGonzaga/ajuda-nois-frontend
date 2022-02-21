import React, { useState } from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';
import { Container } from './styles';

type Props = {
  id: number;
};

export function MonthCalendar({ id }: Props) {
  const calendar = new Date();
  const MONTHS = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  const WEEKDAYS_LONG = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const WEEKDAYS_SHORT = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const [state, setState] = useState<Date>();

  const handleDayClick = (day: Date) => {
    setState(day);
  };

  console.log(state?.toLocaleDateString());

  calendar.setMonth(id);
  return (
    <Container>
      <DayPicker
        showOutsideDays
        month={calendar}
        canChangeMonth={false}
        locale="pt-br"
        months={MONTHS}
        weekdaysLong={WEEKDAYS_LONG}
        weekdaysShort={WEEKDAYS_SHORT}
        firstDayOfWeek={0}
        className={Container}
        onDayClick={handleDayClick}
        selectedDays={state}
      />
    </Container>
  );
}
