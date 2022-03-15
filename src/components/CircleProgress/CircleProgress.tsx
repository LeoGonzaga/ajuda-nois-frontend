import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import 'react-circular-progressbar/dist/styles.css';
import { Container } from './styles';

type CircleProgressProps = {
  area: string;
  color: string;
  value: number;
};

export const CircleProgress = ({
  area,
  color,
  value,
}: CircleProgressProps): JSX.Element => {
  return (
    <Container>
      <div
        style={{
          width: 110,
          height: 110,
        }}
      >
        <CircularProgressbar
          value={value}
          text={`${area}`}
          styles={buildStyles({
            textColor: COLORS.WHITE,
            pathColor: color,
            trailColor: COLORS.TERTIARY,
            textSize: 12,
          })}
        />
        <Text bold>{value}%</Text>
      </div>
    </Container>
  );
};
