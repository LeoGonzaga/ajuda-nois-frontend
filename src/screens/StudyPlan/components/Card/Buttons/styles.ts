import { COLORS } from '@themes/colors';
import styled from 'styled-components';

type Props = {
  status: string;
};

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;

  width: 100%;

  font-size: 14px;
  font-weight: bold;
  color: ${COLORS.WHITE};

  div {
    text-align: center;
    padding: 6px 30px;

    border: none;
    border-radius: 20px;

    cursor: pointer;

    background-color: ${COLORS.GRAY};

    transition: background-color 0.2s;

    &:first-child {
      margin-right: 10px;
      background-color: ${(props) =>
        props.status == 'completed' ? '#00BF20' : '#3D3D45'};
    }

    &:last-child {
      margin: 0 0 0 auto;

      &:hover {
        background-color: ${COLORS.ERROR};
      }
    }

    &:hover {
      background-color: ${COLORS.PRIMARY};
    }
  }
`;
