import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
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

export const EditorWrapper = styled.div`
  overflow-x: hidden;
  padding: 0px 20px;
  max-height: 500px;
  width: 70vw;
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

export const InputsContainer = styled.div`
  padding: 10px;
  div {
    label {
      display: flex;
      padding: 5px;
      cursor: pointer;
      p {
        margin-left: 10px;
      }
    }
  }
`;
