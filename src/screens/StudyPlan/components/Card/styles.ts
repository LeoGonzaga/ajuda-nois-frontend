import { COLORS } from '@themes/colors';
import styled from 'styled-components';

type ContainerProps = {
  status: string;
};

type ExpandedProps = {
  expanded: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;

  width: 100%;
  /* max-width: 1000px; */

  padding: 8px;
  margin-bottom: 10px;
  cursor: pointer;

  border: ${(props) =>
    props.status == 'failed'
      ? `1px solid ${COLORS.ERROR}`
      : `1px solid ${COLORS.NEUTRAL}`};
  border-radius: 5px;

  background-color: ${COLORS.NEUTRAL};

  transition: border 0.3s;
`;

export const ExpandableContent = styled.div<ExpandedProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-height: ${(props) => (props.expanded ? '250px' : '50px')};

  padding: 5px 20px 5px 10px;

  transition: max-height 0.3s ease;

  overflow: hidden;
`;

export const HideableContent = styled.div`
  width: 100%;

  margin-top: 10px;
  padding: 10px 5px 0 5px;

  border-top: 1px solid ${COLORS.GRAY};

  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  padding: 0px 20px 0px 10px;

  transition: height 0.2s;
`;
