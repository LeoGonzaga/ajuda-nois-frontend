import React from 'react';

import CurrentDate from './CurrentDate';
import Months from './Months';
import { Container } from './styles';

type Props = {
  selectedDays: Date[];
  onHandleSelectedDays: (dates: Date[]) => void;
};

export const Sidebar: React.FC<Props> = ({
  selectedDays,
  onHandleSelectedDays,
}: Props) => {
  return (
    <Container>
      <CurrentDate />
      <Months
        selectedDays={selectedDays}
        onHandleSelectedDays={onHandleSelectedDays}
      />
    </Container>
  );
};
