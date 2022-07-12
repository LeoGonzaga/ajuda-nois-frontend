import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 95vh;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Row = styled.div`
  display: flex;
  padding-top: 10px;

  @media (min-width: 425px) and (max-width: 1023px) {
    flex-direction: column;
    &:first-child {
      margin-top: 20px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (min-width: 425px) and (max-width: 1023px) {
    width: 100%;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    width: 100%;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
