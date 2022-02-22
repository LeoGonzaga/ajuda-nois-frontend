import React, { useState } from 'react';
import DayPicker from 'react-day-picker';

import moment from 'moment';

import { Container } from './styles';

type Props = {
  id: number;
  selectedDays: Date[];
  onHandleSelectedDays: (dates: Date[]) => void;
};

function getWeekDays(weekStart: Date) {
  const days = [weekStart];
  for (let i = 1; i < 7; i += 1) {
    days.push(moment(weekStart).add(i, 'days').toDate());
  }
  return days;
}

function getWeekRange(date: Date) {
  return {
    from: moment(date).startOf('week').toDate(),
    to: moment(date).endOf('week').toDate(),
  };
}

export function MonthCalendar({
  id,
  selectedDays,
  onHandleSelectedDays,
}: Props) {
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
  const calendar = new Date();
  const [hoverRange, setHoverRange] = useState<any>(undefined);

  calendar.setMonth(id);

  const handleDayChange = (date: Date) => {
    onHandleSelectedDays(getWeekDays(getWeekRange(date).from));
  };

  const handleDayEnter = (date: Date) => {
    setHoverRange(getWeekRange(date));
  };

  const handleDayLeave = () => {
    setHoverRange(undefined);
  };

  const handleWeekClick = (
    weekNumber: number,
    days: Date[],
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    onHandleSelectedDays(days);
  };

  const daysAreSelected = selectedDays?.length > 0;

  const modifiers: any = {
    hoverRange,
    selectedRange: daysAreSelected && {
      from: selectedDays[0],
      to: selectedDays[6],
    },
    hoverRangeStart: hoverRange && hoverRange.from,
    hoverRangeEnd: hoverRange && hoverRange.to,
    selectedRangeStart: daysAreSelected && selectedDays[0],
    selectedRangeEnd: daysAreSelected && selectedDays[6],
  };

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
        selectedDays={selectedDays}
        modifiers={modifiers}
        onDayClick={handleDayChange}
        onDayMouseEnter={handleDayEnter}
        onDayMouseLeave={handleDayLeave}
        onWeekClick={handleWeekClick}
      />
    </Container>
  );
}
