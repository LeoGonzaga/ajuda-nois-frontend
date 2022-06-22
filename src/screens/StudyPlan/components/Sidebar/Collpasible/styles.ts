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
    display: flex;
    justify-content: center;
    padding: 2px;
    cursor: pointer;

    border: 1px solid ${COLORS.TEXT}35;
    border-color: ${(props) =>
      props.expanded ? `${COLORS.GREEN}` : `${COLORS.TEXT}55`};
    background-color: ${COLORS.GRAY}25;
    border-top-left-radius: ${(props) => (props.expanded ? '5px' : '0px')};
    border-top-right-radius: ${(props) => (props.expanded ? '5px' : '0px')};

    transition: all 0.2s;

    p {
      color: ${(props) => (props.expanded ? '#00BF20' : '#B4B4B4')};
      transition: color 0.2s;
    }

    &:hover {
      border-color: ${COLORS.GREEN};
      background-color: ${COLORS.GRAY}25;
      p {
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
  margin-top: ${(props) => (props.expanded ? '-4px' : '0px')};

  background-color: ${COLORS.NEUTRAL};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  overflow: hidden;

  cursor: default;

  transition: max-height 0.3s ease, padding-top 0.3s ease,
    padding-bottom 0.3s ease, margin-bottom 0.3s ease;
`;
