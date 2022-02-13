import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  height: 95vh;
  overflow-y: auto;
`;

export const Grid = styled.div`
  display: flex;
`;

export const SubjectContent = styled.div`
  width: 100%;
  margin: 10px;
`;

export const Table = styled.div`
  overflow-y: auto;
  height: 80vh;
`;

export const TableItem = styled.div`
  background-color: ${({ theme }) => theme.NEUTRAL};
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  margin-top: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.PRIMARY};
  }
`;
