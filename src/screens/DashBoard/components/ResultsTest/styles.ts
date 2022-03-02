import { COLORS } from '@themes/colors';
import styled from 'styled-components';

type Props = {
  type: string;
};

export const Container = styled.div<Props>`
  width: ${(props) => (props.type == 'horizontal' ? '100%' : '50%')};
  margin-top: 10px;
  background-color: ${COLORS.NEUTRAL};
  border-radius: 5px;
  padding: 15px;
  max-height: 400px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Arrow = styled.button`
  display: flex;

  margin-bottom: 30px;

  font-size: 30px;
  color: ${COLORS.TEXT};

  border: none;
  background-color: transparent;

  transition: filter 0.3s ease;

  cursor: pointer;
  filter: brightness(0.5);

  &:first-child {
    padding-right: 5px;
  }

  &:last-child {
    padding-left: 5px;
  }

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    transform: scaleY(1.8);
  }
`;
