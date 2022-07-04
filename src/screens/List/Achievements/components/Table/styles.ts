import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Th = styled.div`
  height: 61px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0px 20px;
  min-width: 200px;
  width: 100%;
`;

export const Tr = styled.div`
  background-color: ${({ theme }) => theme.NEUTRAL};
  border-radius: 4px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0px 20px;
  transition: 100ms ease-in;
  :hover {
    background-color: ${({ theme }) => theme.SECONDARY};
  }
`;

export const Column = styled.div`
  width: 33%;
  padding: 10px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  button {
    background: red;
    width: 100%;
  }

  a {
    color: #fff;
  }
`;

export const ScrollContainer = styled.div`
  height: 90vh;
  overflow-y: auto;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
  background-color: red;
  cursor: pointer;
`;
