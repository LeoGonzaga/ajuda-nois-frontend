import Collapsible from '../Collpasible';
import { Container } from './styles';

export const Months: React.FC = () => {
  const currentMonth = new Date().getMonth();

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

  return (
    <Container>
      {months?.map(({ name, id }) => (
        <Collapsible name={name} id={id} currentMonth={currentMonth} key={id} />
      ))}
    </Container>
  );
};
