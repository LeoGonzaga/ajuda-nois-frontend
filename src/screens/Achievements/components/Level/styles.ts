import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 240px;
  height: 240px;
  padding: 10px;

  position: relative;
  border-radius: 100%;

  background-color: ${COLORS.TERTIARY};

  position: relative;

  .flip {
    -moz-transform: scale(-1, 1);
    -webkit-transform: scale(-1, 1);
    -o-transform: scale(-1, 1);
    -ms-transform: scale(-1, 1);
    transform: scale(-1, 1);
    border-radius: 100%;
    position: absolute;
  }

  .flip + p {
    position: absolute;
  }

  &::before {
    border-radius: 100%;
    content: '';
    background-image: linear-gradient(to bottom, #ffd054 0%, #37332b 100%);

    top: -11px;
    left: -11px;
    bottom: -13px;
    right: -11px;
    position: absolute;
    z-index: -1;
  }
`;
