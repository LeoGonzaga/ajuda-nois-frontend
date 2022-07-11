import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* max-width: 500px; */
  max-height: 120px;

  padding: 5px;
  margin-bottom: 20px;

  font-size: 13px;
  color: ${COLORS.WHITE};

  overflow-y: scroll;

  @media (min-width: 425px) and (max-width: 1023px) {
    font-size: 15px;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;
