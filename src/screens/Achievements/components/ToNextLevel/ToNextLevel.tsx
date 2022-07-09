import Flex from '@components/Flex';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container } from './styles';

type LevelProps = {
  exp: number;
  progression: Array<number>;
};

export const ToNextLevel = ({ exp, progression }: LevelProps): JSX.Element => {
  let level = 0;
  let toNextLevel = 0;

  while (progression[++level] <= exp);
  level--;

  toNextLevel = progression[level + 1] - exp;

  return (
    <Container>
      <Text size={28} bold color={COLORS.TEXT}>
        Experiência para o próximo nível:
      </Text>
      <Text size={28} bold color="#ffd054">
        {toNextLevel}
      </Text>
    </Container>
  );
};
