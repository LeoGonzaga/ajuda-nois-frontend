import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${COLORS.NEUTRAL};
  margin-top: 10px;
  height: 100%;
  margin-right: 10px;
  border-radius: 5px;
  padding: 10px;

  @media (min-width: 425px) and (max-width: 1023px) {
    width: 100%;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px 20px 50px 20px;

  @media (min-width: 425px) and (max-width: 1023px) {
    width: 100%;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    width: 100%;
  }
`;
