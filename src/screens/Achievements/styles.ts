import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100%;
  padding: 20px;

  overflow-y: hidden;

  /* Arrumar o espaçamento do título */
  div:first-child {
    span + p {
      /* margin-top: -10px; */
      margin-bottom: 20px;
    }
  }

  @media (min-width: 425px) and (max-width: 1023px) {
    overflow-y: initial;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    overflow-y: initial;
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

    height: 100vh;

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

export const AchievementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  padding: 10px;
  overflow-y: auto;
  scroll-behavior: smooth;

  @media (min-width: 425px) and (max-width: 1023px) {
    height: auto;
    margin-bottom: 50px;
    overflow-y: initial;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    height: auto;
    margin-bottom: 100px;
    overflow-y: initial;
  }
`;

export const LevelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
