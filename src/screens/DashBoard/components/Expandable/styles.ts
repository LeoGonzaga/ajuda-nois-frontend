import { COLORS } from '@themes/colors';
import styled from 'styled-components';

type Props = {
  expanded: boolean;
  size: string;
};

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-height: ${(props) => (props.expanded ? props.size : '80px')};
  padding: 20px;

  border-radius: 5px;
  background-color: ${COLORS.NEUTRAL};

  overflow-y: hidden;

  transition: max-height 0.3s ease;

  cursor: pointer;

  svg {
    transform: ${(props) => (props.expanded ? 'rotate(-90deg)' : '')};

    filter: brightness(0.5);

    transition: all 0.3s ease;
  }

  &:hover {
    svg {
      filter: brightness(0.8);
    }
  }
`;
