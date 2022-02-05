import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import { COLORS } from '@themes/colors';

import 'react-circular-progressbar/dist/styles.css';

type CircleProgressProps = {
  area: string;
  color: string;
  value: number;
};

export const CircleProgress = ({ area, color, value }: CircleProgressProps) => {
  return (
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
    </div>
  );
};
