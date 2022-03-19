import { CircularInput, CircularProgress } from 'react-circular-input';

import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container } from './styles';

type LevelProps = {
  exp: number;
};

export const Level = ({ exp }: LevelProps): JSX.Element => {
  const levelProgression = [0, 100, 500, 1000, 2000, 3500, 5000, 7500, 10000];
  let level = 0;

  while (levelProgression[++level] <= exp);
  level--;

  function getProgress(exp: number, level: number) {
    if (level < levelProgression.length - 1) {
      const levelCap = levelProgression[level + 1] - levelProgression[level];
      const currentProgress = (exp - levelProgression[level]) / levelCap;
      return 1 - currentProgress;
    } else {
      return 0;
    }
  }

  return (
    <Container>
      <CircularInput
        value={getProgress(exp, level)}
        radius={125}
        className="flip"
      >
        <CircularProgress
          strokeWidth={24}
          stroke={COLORS.NEUTRAL}
          strokeLinecap="square"
          background-color="linear-gradient(to bottom, #ffd054 0%, #37332b 100%)"
        />
      </CircularInput>
      <Text size={38} bold color="#ffd054">
        Level {level}
      </Text>
    </Container>
  );
};
