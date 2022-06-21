import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';

import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import 'react-circular-progressbar/dist/styles.css';
import { Container, TextWrap, Wrapper } from './styles';

type CircleProgressProps = {
  area: string;
  color: string;
  value: number;
  size?: number;
};

export const CircleProgress = ({
  area,
  color,
  value,
  size,
}: CircleProgressProps): JSX.Element => {
  return (
    <Container>
      <Wrapper size={size}>
        <CircularProgressbarWithChildren
          value={value}
          styles={buildStyles({
            textColor: COLORS.WHITE,
            pathColor: color,
            trailColor: COLORS.TERTIARY,
            textSize: 12,
          })}
        >
          <TextWrap>{area}</TextWrap>
        </CircularProgressbarWithChildren>
        <Text bold>{value}%</Text>
      </Wrapper>
    </Container>
  );
};
