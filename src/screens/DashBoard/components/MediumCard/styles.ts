import { COLORS } from '@themes/colors';
import styled from 'styled-components';

type Props = {
  color: string;
  type?: string;
};

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  padding: 15px 20px;
  border-radius: 5px;
  background-color: ${COLORS.NEUTRAL};
`;

export const Focus = styled.p<Props>`
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => props.color};

  svg {
    font-size: 38px;
  }
`;

export const Subtext = styled.p`
  margin-top: 3px;
  font-size: 16px;
  font-weight: bold;
  color: ${COLORS.TEXT};
`;
