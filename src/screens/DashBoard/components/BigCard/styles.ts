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

  margin-right: 20px;

  border-radius: 5px;
  background-color: ${COLORS.NEUTRAL};

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 3px 0;

    font-weight: bold;
    color: ${COLORS.WHITE};

    border: none;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    background-color: ${(props) => props.color};

    cursor: pointer;

    transition: all 0.3s ease;

    svg {
      margin-right: 5px;
    }

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 15px 20px 5px 20px;
`;

export const Focus = styled.p<Props>`
  font-size: 45px;
  font-weight: bold;
  color: ${(props) => props.color};
`;

export const Wrapper = styled.div<Props>`
  svg {
    font-size: ${(props) => (props.type === 'Simulados' ? '75px' : '90px')};
    color: ${(props) => props.color};
  }
`;
