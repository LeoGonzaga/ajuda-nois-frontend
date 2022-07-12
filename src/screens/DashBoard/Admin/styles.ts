import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 100vh;
  padding: 20px;
  overflow: hidden;

  @media (min-width: 425px) and (max-width: 1023px) {
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;

export const Row = styled.div`
  display: flex;
  padding-top: 10px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 425px) and (max-width: 1023px) {
    flex-direction: column;
    & > button {
      width: 100%;
    }
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
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

    height: 90vh;

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
