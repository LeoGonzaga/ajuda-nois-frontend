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

export const Empty = styled.div`
  padding-left: 15px;
  margin-top: 10px;
`;

export const TableItemContent = styled.div`
  cursor: pointer;
  padding: 5px 0px;

  border: none;

  display: flex;
  flex-direction: column;
  button {
    padding: 10px;
    cursor: pointer;
    border: none;
    border-bottom: 1px solid #ccc;
  }
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
