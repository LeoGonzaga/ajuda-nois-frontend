import React, { useEffect, useState } from 'react';
import DayPicker from 'react-day-picker';
import { useDispatch } from 'react-redux';

import moment from 'moment';
import { add } from 'src/config/actions/calendar';

import { Container } from './styles';

type Props = {
  id: number;
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

export function MonthCalendar({ id }: Props): JSX.Element {
  const dispatch = useDispatch();
  const calendar = new Date();
  const [selectedDays, setSelectedDays] = useState<Date[]>([]);
  const [hoverRange, setHoverRange] = useState<any>(undefined);

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

  const handleDayChange = (date: Date) => {
    setSelectedDays(getWeekDays(getWeekRange(date).from));
    dispatch(add(getWeekDays(getWeekRange(date).from)));
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
    setSelectedDays(days);
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

  calendar.setMonth(id);

  useEffect(() => {
    const aux = new Date();
    if (calendar.getMonth() === aux.getMonth()) handleDayChange(calendar);
  }, []);

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
