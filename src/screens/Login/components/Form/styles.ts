import { FadeInAnimation } from '@themes/animations/animations';
import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${COLORS.NEUTRAL};
  max-width: 445px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 42px 0px;
  margin-top: 32px;
  border-radius: 6px;
  animation: ${FadeInAnimation} 0.5s ease-in;
`;
