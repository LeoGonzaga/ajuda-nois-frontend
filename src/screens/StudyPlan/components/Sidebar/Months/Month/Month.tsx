import React from 'react';

import Collapsible from '../../Collpasible';
import { Container } from './styles';
import { useToggle } from './useToggle';

type Props = {
  name: string;
  id: number;
  currentMonth: number;
};

export function Month({ name, id, currentMonth }: Props) {
  const open = id === currentMonth ? true : false;
  const [expand, setExpand] = useToggle(open);

  return (
    <Container onClick={setExpand}>
      <div>
        <Collapsible name={name} active={expand} />
      </div>
    </Container>
  );
}
