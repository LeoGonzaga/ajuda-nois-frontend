import styled from 'styled-components';

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

export const TableItemContent = styled.div`
  cursor: pointer;
  padding: 5px 0px;
`;

export const ContentLine = styled.div`
  height: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border-bottom: 1px solid #ccc;
  &:hover {
    background-color: ${({ theme }) => theme.PRIMARY};
  }
`;
