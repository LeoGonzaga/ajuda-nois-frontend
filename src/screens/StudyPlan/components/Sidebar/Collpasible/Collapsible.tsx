import React from 'react';

import Spacing from '@components/Spacing';
import Text from '@components/Text';

import MonthCalendar from '../Calendar';
import { Container, ExpandableContent } from './styles';

type Props = {
  name: string;
  id: number;
  expanded: boolean;
  onHandleClick: (id: number) => void;
};

export function Collapsible({ name, id, expanded, onHandleClick }: Props) {
  const handleExpand = (id: number) => {
    onHandleClick(id);
  };

  return (
    <Container expanded={expanded}>
      <span onClick={() => handleExpand(id)}>
        <Text size={16}>{name}</Text>
      </span>
      <Spacing vertical={2} />
      <ExpandableContent expanded={expanded}>
        <MonthCalendar id={id} />
      </ExpandableContent>
    </Container>
  );
}
