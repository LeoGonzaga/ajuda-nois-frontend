import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;

  @media (min-width: 425px) and (max-width: 1023px) {
    & > div > div:first-child {
      width: 100%;
    }
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;

  @media (min-width: 425px) and (max-width: 1023px) {
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (min-width: 425px) and (max-width: 1023px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  height: 100%;

  @media (min-width: 425px) and (max-width: 1023px) {
    flex-direction: row;
    width: 100%;
    margin-bottom: 10px;
    height: initial;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    width: 60%;
  }
`;
