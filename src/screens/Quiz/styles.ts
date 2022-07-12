import { COLORS } from '@themes/colors';
import styled from 'styled-components';

type Props = {
  active: boolean;
};

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    height: 90%;
  }

  @media (min-width: 425px) and (max-width: 1023px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & > div:first-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 90%;
      height: 90%;
      /* background-color: blue; */
    }
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    & > div:first-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 90%;
    }
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

export const SideBarSubjects = styled.div`
  width: 300px;
  padding: 10px;
  background-color: ${({ theme }) => theme.NEUTRAL};

  display: flex;
  flex-direction: column;

  @media (min-width: 425px) and (max-width: 1023px) {
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
    width: 300px;
    height: ${(props) => (props.active ? '90%' : '50px')};
    position: absolute;
    bottom: 0;
    z-index: 99;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    width: 300px;
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
  padding: 0px 20px;
  height: 100%;
  /* max-height: 500px; */
  overflow-y: scroll;
  width: 99%;
  border-bottom: 1px solid ${COLORS.GRAY};

  @media (min-width: 425px) and (max-width: 1023px) {
    height: 88vh;
    opacity: ${(props) => (props.active ? '0.1' : '1')};

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
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

  & > div:first-child {
    button {
      margin-right: 15px;
    }
  }

  @media (min-width: 425px) and (max-width: 1023px) {
    & > div:first-child {
      width: 50%;
      margin-left: 60px;
      button {
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;

export const InputsContainer = styled.div<Props>`
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

  @media (min-width: 425px) and (max-width: 1023px) {
    opacity: ${(props) => (props.active ? '0.1' : '1')};
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    opacity: ${(props) => (props.active ? '0.1' : '1')};
  }
`;
