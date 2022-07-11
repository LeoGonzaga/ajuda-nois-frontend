import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  height: 95vh;
  /* overflow-y: auto; */
  /* width: 100%; */

  @media (min-width: 425px) and (max-width: 1023px) {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Grid = styled.div`
  display: flex;
  width: 100%;

  @media (min-width: 425px) and (max-width: 1023px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    flex-direction: column;
  }
`;

export const SubjectContent = styled.div`
  margin-top: 10px;
  width: 100%;

  @media (min-width: 425px) and (max-width: 1023px) {
    margin-top: 20px;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    margin-top: 0px;
  }
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
  min-height: 61px;
`;

export const Area = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 425px) and (max-width: 1023px) {
    flex-direction: row;
    overflow-x: scroll;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    flex-direction: row;
    overflow-x: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const AreaSubject = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (min-width: 425px) and (max-width: 1023px) {
    flex-direction: row;
    overflow-x: scroll;
    padding: 0 10px;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    flex-direction: row;
    overflow-x: scroll;
    padding: 0 10px;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 0;

  ${Container} {
    flex: 1;
    padding: 10px;
    justify-content: space-between;
  }

  @media (min-width: 425px) and (max-width: 1023px) {
    display: flex;
    flex-direction: column-reverse;

    height: 100vh;

    overflow-y: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    display: flex;
    flex-direction: column-reverse;

    height: 100vh;

    overflow-y: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
