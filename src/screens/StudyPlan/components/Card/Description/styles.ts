import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  max-height: 120px;

  margin-bottom: 20px;

  font-size: 13px;
  color: ${COLORS.WHITE};

  overflow-y: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
