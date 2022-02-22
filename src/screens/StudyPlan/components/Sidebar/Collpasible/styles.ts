import { COLORS } from '@themes/colors';
import styled from 'styled-components';

type Props = {
  expanded: boolean;
};

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  span {
    cursor: pointer;

    p {
      color: ${(props) => (props.expanded ? '#00BF20' : '#B4B4B4')};

      transition: color 0.2s;

      &:hover {
        color: ${COLORS.SECONDARY};
      }
    }
  }
`;

export const ExpandableContent = styled.div<Props>`
  display: flex;
  align-self: center;

  width: 100%;
  max-height: ${(props) => (props.expanded ? '300px' : '0px')};

  padding: ${(props) => (props.expanded ? '5px 10px' : '0px 10px')};
  margin-bottom: ${(props) => (props.expanded ? '10px' : '0px')};

  background-color: ${COLORS.NEUTRAL};
  border-radius: 5px;

  overflow: hidden;

  cursor: default;

  transition: max-height 0.3s ease, padding-top 0.3s ease,
    padding-bottom 0.3s ease, margin-bottom 0.3s ease;
`;
