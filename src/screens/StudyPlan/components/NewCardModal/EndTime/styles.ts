import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  color: ${COLORS.TEXT};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (min-width: 425px) and (max-width: 1023px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;

export const InputError = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 5px;
  margin-bottom: -5px;

  font-size: 12px;
  color: ${COLORS.ERROR};

  svg {
    margin-right: 5px;
  }
`;
