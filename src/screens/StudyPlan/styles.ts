import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 100%;
  width: 100%;

  .container {
    display: flex;
    flex-direction: column;

    padding: 20px;
  }

  .cards {
    display: flex;
    flex-direction: column;

    margin-top: 20px;

    max-height: 50%;
    width: 100%;

    /* overflow-y: scroll;
    scroll-behavior: smooth; */
  }
`;
