import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import GradientCircularProgressBar from '@components/GradientCircularProgressBar';
import Text from '@components/Text';

import { Container } from './styles';

type LevelProps = {
  exp: number;
  progression: Array<number>;
};

export const Level = ({ exp, progression }: LevelProps): JSX.Element => {
  let level = 0;

  while (progression[++level] <= exp);
  level--;

  function getProgress(exp: number, level: number) {
    if (level < progression.length - 1) {
      const levelCap = progression[level + 1] - progression[level];
      const currentProgress = (exp - progression[level]) / levelCap;
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
          Nível {level}
        </Text>
      </CircularProgressbarWithChildren>
    </Container>
  );
};
