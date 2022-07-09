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

export const SubjectItemButton = styled.button<{ active: boolean }>`
  background-color: ${(props) =>
    props.active ? props.theme.SECONDARY : 'gray'};
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  margin: 2px;
`;
