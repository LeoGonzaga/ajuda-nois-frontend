import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  background: ${COLORS.SECONDARY};
  width: 300px;
  overflow: hidden;
  margin: 10px;
  border-radius: 5px;

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  div {
    background-color: ${COLORS.NEUTRAL};
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    text-decoration: none;
    color: ${COLORS.WHITE};
    font-weight: bold;

    &:hover {
      color: ${COLORS.PRIMARY};
    }
  }
  p {
    padding: 10px;
  }
`;
