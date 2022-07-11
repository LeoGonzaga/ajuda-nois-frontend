import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 100px;
  height: 100%;

  margin-top: 5px;

  @media (min-width: 425px) and (max-width: 629px) {
    flex-direction: row;
    width: 100%;
    max-width: inherit;

    overflow-x: scroll;
  }

  @media (min-width: 630px) and (max-width: 1023px) {
    flex-direction: row;
    width: 100%;
    max-width: inherit;

    overflow-x: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    flex-direction: row;
    width: 100%;
    height: initial;
    max-width: inherit;

    overflow: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
