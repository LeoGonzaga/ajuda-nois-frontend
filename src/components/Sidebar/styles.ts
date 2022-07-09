import { COLORS } from '@themes/colors';
import styled from 'styled-components';

type Props = {
  expanded: boolean;
};

export const Container = styled.div<Props>`
  width: ${(props) => (props.expanded ? '260' : '60')}px;
  height: 100vh;
  margin-left: 15px;
  padding-right: 15px;
  border-right: 1px solid ${COLORS.NEUTRAL};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: width 0.2s ease-in-out;

  @media (max-width: 425px) {
    width: ${(props) => (props.expanded ? '100%' : '60px')};
    position: absolute;
    z-index: 99;
    background-color: ${COLORS.TERTIARY};
  }

  @media (max-width: 1024px) {
    width: ${(props) => (props.expanded ? '100%' : '60px')};
    position: absolute;
    z-index: 99;
    background-color: ${COLORS.TERTIARY};
  }
`;
