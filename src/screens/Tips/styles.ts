import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  height: 100vh;
  overflow-y: scroll;
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
`;
