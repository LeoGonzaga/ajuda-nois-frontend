import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

type Props = {
  background: string;
};

export const SubjectCards = styled.button`
  width: 250px;
  height: 300px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.NEUTRAL};
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  border: none;
  outline: none;

  :hover {
    box-shadow: inset 0 0 2em ${COLORS.PRIMARY}, 0 0 2em ${COLORS.PRIMARY};
  }
`;

export const Circle = styled.div<Props>`
  height: 180px;
  width: 180px;
  border-radius: 50%;
  border: 5px solid #fff;
  background-color: ${(props) => props.background};
`;
