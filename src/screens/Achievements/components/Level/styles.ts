import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 300px;
  padding: 16px;

  border-radius: 100%;

  .CircularProgressbar-path {
    stroke: url(#level);
    stroke-width: 6;
    stroke-linecap: butt;
  }

  .CircularProgressbar-trail {
    stroke: ${COLORS.NEUTRAL};
    stroke-width: 6;
  }

  .CircularProgressbar-background {
    fill: ${COLORS.NEUTRAL};
  }

  .CircularProgressbar {
    border-radius: 100%;
  }
`;
