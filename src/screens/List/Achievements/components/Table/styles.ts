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
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 10px;
  margin: 10px;
  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-bottom: 15px;
  }

  :hover {
    background-color: ${({ theme }) => theme.SECONDARY};
  }
`;

export const Column = styled.div`
  color: #ccc;
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-y: auto;
`;

export const ButtonsContainer = styled.div`
  padding: 20px;
  cursor: pointer;
  &:hover {
    svg {
      path {
        fill: #fff;
      }
    }
  }
`;
