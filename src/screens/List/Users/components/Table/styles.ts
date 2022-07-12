import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 425px) and (max-width: 1023px) {
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
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

  @media (min-width: 425px) and (max-width: 1023px) {
    width: 1000px;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
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

  @media (min-width: 425px) and (max-width: 1023px) {
    width: 1000px;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;

export const Column = styled.div`
  width: 33%;
  padding: 10px;

  button {
    background: red;
    width: 100%;
  }
`;

export const ScrollContainer = styled.div`
  height: 90vh;
  overflow-y: auto;

  @media (min-width: 425px) and (max-width: 1023px) {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
  button {
    cursor: pointer;
    width: 50px;
    background-color: transparent;
    border: none;
  }
`;
