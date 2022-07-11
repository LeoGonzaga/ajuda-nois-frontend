import { COLORS } from '@themes/colors';
import styled from 'styled-components';

type Props = {
  active: boolean;
};

export const Container = styled.div`
  display: flex;
  height: 100vh;
  /* background-color: red; */

  @media (min-width: 425px) and (max-width: 1023px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
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

export const Row = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 425px) and (max-width: 1023px) {
    margin-left: 60px;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;

export const Title = styled.div`
  margin-left: 14px;
  font-size: 18px;
  font-weight: bold;

  @media (min-width: 425px) and (max-width: 1023px) {
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;

export const SideBarSubjects = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.NEUTRAL};
  display: flex;
  flex-direction: column;
  max-width: 300px;

  @media (min-width: 425px) and (max-width: 1023px) {
    height: 100%;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;

export const SideBarSubjectsExpand = styled.div<Props>`
  padding: 10px;
  background-color: ${({ theme }) => theme.NEUTRAL};
  display: flex;
  flex-direction: column;
  max-width: 300px;

  transition: height 0.3s ease-in-out;
  @media (min-width: 425px) and (max-width: 1023px) {
    height: ${(props) => (props.active ? '90%' : '50px')};
    position: absolute;
    bottom: 0;
    z-index: 99;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    height: ${(props) => (props.active ? '90%' : '50px')};
    position: absolute;
    bottom: 0;
    right: 25px;
    z-index: 99;
    overflow: hidden;
  }
`;

export const Expand = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ScrollSideBar = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 50%;
`;

export const EditorWrapper = styled.div<Props>`
  overflow-x: hidden;
  padding: 20px;
  width: 100%;
  transition: opacity 0.3s ease-in-out;

  @media (min-width: 425px) and (max-width: 1023px) {
    height: 88vh;
    opacity: ${(props) => (props.active ? '0.1' : '1')};
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    opacity: ${(props) => (props.active ? '0.1' : '1')};
  }
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
