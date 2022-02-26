import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 0.2fr;
  height: 100vh;
`;

export const SideBarSubjects = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.NEUTRAL};
`;

export const EditorWrapper = styled.div`
  overflow-x: hidden;
  padding: 0px 20px;
`;

export const ContentLine = styled.div`
  height: 30px;
  border-radius: 4px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.PRIMARY};
  }
`;
