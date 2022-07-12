import styled from 'styled-components';

export const SelectRow = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  overflow-x: scroll;
  width: 85%;
  /* flex-wrap: wrap; */
  @media (min-width: 425px) and (max-width: 1023px) {
    margin: 15px 0 25px 0;
    width: 100%;

    overflow-x: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    margin: 15px 0 25px 0;
    width: 100%;

    overflow-x: scroll;
  }
`;

export const Container = styled.div`
  padding: 20px;
  /* overflow-y: hidden; */
  height: 100vh;

  @media (min-width: 425px) and (max-width: 1023px) {
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 425px) and (max-width: 1023px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;

export const WrapperCards = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 5px 0px;

  @media (min-width: 425px) and (max-width: 1023px) {
    flex-direction: row;
    margin-bottom: 15px;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;

  & > p {
    font-size: 22px;
  }

  @media (min-width: 425px) and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80%;

    overflow-y: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;
