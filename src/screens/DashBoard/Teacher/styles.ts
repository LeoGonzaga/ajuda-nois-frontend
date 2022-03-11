import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 95vh;
  padding: 20px;
  overflow-y: auto;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;

    button:last-child {
      margin-left: 20px;
    }
  }
`;

export const ConfigButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: fit-content;

  padding: 16px 18px;

  font-size: 14px;
  font-weight: bold;
  color: ${COLORS.SECONDARY};

  background-color: transparent;
  border: 1px solid ${COLORS.SECONDARY};
  border-radius: 8px;

  cursor: pointer;

  filter: brightness(0.8);

  &:hover {
    filter: brightness(1);
  }

  svg {
    margin-right: 5px;
    font-size: 10px;
  }
`;
