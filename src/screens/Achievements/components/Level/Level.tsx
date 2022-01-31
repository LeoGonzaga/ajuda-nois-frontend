import {
  CircularInput,
  CircularTrack,
  CircularProgress,
  CircularThumb,
} from 'react-circular-input';

import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container } from './styles';

type LevelProps = {
  exp: number;
};

export const Level = ({ exp }: LevelProps) => {
  const levelProgression = [0, 100, 500, 1000, 2000, 3500, 5000, 7500, 10000];

  function getLevel(exp: number) {
    let i = 0;

    while (levelProgression[++i] <= exp);
    i--;
    return i;
  }

  return (
    <Container>
      <CircularInput value={1} radius={125} className="flip">
        <CircularProgress
          strokeWidth={10}
          stroke={COLORS.NEUTRAL}
          strokeLinecap="square"
          background-color="linear-gradient(to bottom, #ffd054 0%, #37332b 100%)"
        />
      </CircularInput>
      <Text size={38} bold color="#ffd054">
        Level {getLevel(exp)}
      </Text>
    </Container>
  );
};
