import React from 'react';

import Spacing from '@components/Spacing';
import Text from '@components/Text';

import MonthCalendar from '../Calendar';
import { Container } from './styles';

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
    <Container>
      <span
        className={expanded ? 'active' : ''}
        onClick={() => handleExpand(id)}
      >
        <Text size={16}>{name}</Text>
      </span>
      <Spacing vertical={2} />
      <span className={expanded ? 'content expanded' : 'content'}>
        <MonthCalendar id={id} />
      </span>
    </Container>
  );
}