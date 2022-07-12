import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 75%;
  background-color: ${COLORS.NEUTRAL};
  border-radius: 5px;
  padding: 10px;
  height: 400px;

  @media (min-width: 425px) and (max-width: 1023px) {
    margin-top: 10px;
    width: 100%;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    margin-top: 10px;
    width: 100%;
  }
`;
