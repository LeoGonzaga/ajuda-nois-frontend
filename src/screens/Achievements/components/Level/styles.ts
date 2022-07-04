import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  height: 400px;
  padding: 16px;
  margin-right: 30px;

  border-radius: 100%;

  .CircularProgressbar-path {
    stroke: url(#level);
    stroke-width: 8;
    stroke-linecap: butt;
  }

  .CircularProgressbar-trail {
    stroke: ${COLORS.NEUTRAL};
    stroke-width: 8;
  }

  .CircularProgressbar-background {
    fill: ${COLORS.NEUTRAL};
  }

  .CircularProgressbar {
    border-radius: 100%;
  }
`;
