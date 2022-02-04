import React from 'react';

import Spacing from '@components/Spacing';
import Text from '@components/Text';

import Animation from '../Animations';
import MonthCalendar from '../Calendar';
import { Container } from './styles';
import { useToggle } from './useToggle';

type Props = {
  name: string;
  id: number;
  currentMonth: number;
};

export function Collapsible({ name, id, currentMonth }: Props) {
  const open = id === currentMonth ? true : false;
  const [expand, setExpand] = useToggle(open);

  return (
    <Container>
      <span className={expand ? 'active' : ''} onClick={setExpand}>
        <Text size={16}>{name}</Text>
      </span>
      <Spacing vertical={2} />
      {expand && (
        <Animation active={expand}>
          <span className="content">
            <MonthCalendar id={id} />
          </span>
        </Animation>
      )}
    </Container>
  );
}
