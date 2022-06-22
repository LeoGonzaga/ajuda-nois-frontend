import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import GradientCircularProgressBar from '@components/GradientCircularProgressBar';
import Text from '@components/Text';

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
      return currentProgress;
    } else {
      return 0;
    }
  }
  return (
    <Container>
      <GradientCircularProgressBar
        startColor={'#F9C948'}
        endColor={'#37332b'}
        idCSS="level"
        rotation={90}
      />
      <CircularProgressbarWithChildren value={getProgress(exp, level) * 100}>
        <Text size={48} bold color="#ffd054">
          Level {level}
        </Text>
      </CircularProgressbarWithChildren>
    </Container>
  );
};
