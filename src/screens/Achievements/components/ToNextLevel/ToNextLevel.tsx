import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container } from './styles';

type LevelProps = {
  progression: Array<number>;
  level: {
    level: number;
    experience: number;
  };
};

export const ToNextLevel = ({
  progression,
  level,
}: LevelProps): JSX.Element => {
  const toNextLevel = progression[level.level + 1] - level.experience;

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
