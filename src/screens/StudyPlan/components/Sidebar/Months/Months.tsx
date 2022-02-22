import { useState } from 'react';

import Collapsible from '../Collpasible';
import { Container } from './styles';

type Props = {
  selectedDays: Date[];
  onHandleSelectedDays: (dates: Date[]) => void;
};

export const Months: React.FC<Props> = ({
  selectedDays,
  onHandleSelectedDays,
}: Props) => {
  const currentMonth = new Date().getMonth();
  const [active, setActive] = useState(currentMonth);
  const [state, setState] = useState([
    currentMonth == 0 ? true : false,
    currentMonth == 1 ? true : false,
    currentMonth == 2 ? true : false,
    currentMonth == 3 ? true : false,
    currentMonth == 4 ? true : false,
    currentMonth == 5 ? true : false,
    currentMonth == 6 ? true : false,
    currentMonth == 7 ? true : false,
    currentMonth == 8 ? true : false,
    currentMonth == 9 ? true : false,
    currentMonth == 10 ? true : false,
    currentMonth == 11 ? true : false,
  ]);

  const months = [
    {
      id: 0,
      name: 'Janeiro',
    },
    {
      id: 1,
      name: 'Fevereiro',
    },
    {
      id: 2,
      name: 'Março',
    },
    {
      id: 3,
      name: 'Abril',
    },
    {
      id: 4,
      name: 'Maio',
    },
    {
      id: 5,
      name: 'Junho',
    },
    {
      id: 6,
      name: 'Julho',
    },
    {
      id: 7,
      name: 'Agosto',
    },
    {
      id: 8,
      name: 'Setembro',
    },
    {
      id: 9,
      name: 'Outubro',
    },
    {
      id: 10,
      name: 'Novembro',
    },
    {
      id: 11,
      name: 'Dezembro',
    },
  ];

  const handleState = (id: number) => {
    if (active != id) {
      const newState = state;

      newState[id] = true;
      newState[active] = false;

      setActive(id);
      setState(newState);
    }
  };

  return (
    <Container>
      {months?.map(({ name, id }) => (
        <Collapsible
          key={id}
          name={name}
          id={id}
          expanded={state[id]}
          selectedDays={selectedDays}
          onHandleClick={handleState}
          onHandleSelectedDays={onHandleSelectedDays}
        />
      ))}
    </Container>
  );
};
