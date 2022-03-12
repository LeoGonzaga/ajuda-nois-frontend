import { BsCalendar4 } from 'react-icons/bs';

import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container } from './styles';

export const CurrentDate = (): JSX.Element => {
  const newDate = new Date();
  const day = `0${newDate.getDate()}`;
  const month = `0${newDate.getMonth() + 1}`;
  const year = newDate.getFullYear();

  const currentDate = `${day.slice(-2)}/${month.slice(-2)}/${year}`;

  return (
    <Container>
      <BsCalendar4 size={20} color={COLORS.SECONDARY} />
      <Spacing horizontal={10} />
      <Text size={18} color={COLORS.TEXT} bold>
        {currentDate}
      </Text>
    </Container>
  );
};
