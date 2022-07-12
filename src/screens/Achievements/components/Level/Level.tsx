import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import GradientCircularProgressBar from '@components/GradientCircularProgressBar';
import Text from '@components/Text';

import { Container } from './styles';

type LevelProps = {
  exp: number;
  progression: Array<number>;
  level: {
    level: number;
    experience: number;
  };
};

export const Level = ({ exp, progression, level }: LevelProps): JSX.Element => {
  let levelLocal = 0;

  while (progression[++levelLocal] <= exp);
  levelLocal--;

  function getProgress(exp: number, levelLocal: number) {
    if (levelLocal < progression.length - 1) {
      const levelLocalCap =
        progression[levelLocal + 1] - progression[levelLocal];
      const currentProgress = (exp - progression[levelLocal]) / levelLocalCap;
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
        idCSS="levelLocal"
        rotation={90}
      />
      <CircularProgressbarWithChildren
        value={getProgress(exp, levelLocal) * 100}
      >
        <Text size={48} bold color="#ffd054">
          Nível {level.level}
        </Text>
      </CircularProgressbarWithChildren>
    </Container>
  );
};
