import React, { useState } from 'react';
import Calendar from 'react-calendar';

import { Container } from './styles';

type Props = {
  id: number;
};

export function MonthCalendar({ id }: Props) {
  const [value, onChange] = useState(new Date());
  const calendar = new Date();
  calendar.setMonth(id);

  return (
    <Container>
      <Calendar
        onChange={onChange}
        value={value}
        className="calendar"
        calendarType="US"
        showNavigation={false}
        activeStartDate={calendar}
      />
    </Container>
  );
}
