import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 0.2fr;
  height: 100vh;
`;

export const Item = styled.button<{ active: boolean }>`
  color: ${(props) => (props.active ? COLORS.PRIMARY : 'white')};
  height: 40px;
  border: none;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.PRIMARY};
  }
`;

export const SideBarSubjects = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.NEUTRAL};

  display: flex;
  flex-direction: column;
`;

export const ScrollSideBar = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 50%;
`;

export const EditorWrapper = styled.div`
  overflow-x: hidden;
  padding: 20px;
  width: 60vw;
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

export const Wrapper = styled.div`
  padding: 20px;
`;
