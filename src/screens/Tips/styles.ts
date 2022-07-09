import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  height: 100vh;
  overflow-y: scroll;

  @media (min-width: 425px) and (max-width: 1023px) {
    overflow-y: initial;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;

export const Wrapper = styled.div``;

export const WrapperCards = styled.div`
  column-count: 3;
  column-gap: 15px;
  /* display: flex;
  flex-wrap: wrap;

  div {
    &:before {
      counter-increment: items;
    }

    &:nth-of-type(4n + 1) {
      order: 1;
    }
    &:nth-of-type(4n + 2) {
      order: 2;
    }
    &:nth-of-type(4n + 3) {
      order: 3;
    }
  } */

  @media (min-width: 425px) and (max-width: 1023px) {
    column-count: 1;
    column-gap: 15px;

    margin-bottom: 50px;
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

  @media (min-width: 425px) and (max-width: 1023px) {
    overflow-y: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;
