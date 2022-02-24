import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  color: ${COLORS.TEXT};
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
