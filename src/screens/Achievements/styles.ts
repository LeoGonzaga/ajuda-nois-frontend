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
`;

export const AchievementsContainer = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  max-height: 550px;
  padding: 10px;

  overflow-y: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LevelContainer = styled.div`
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ShareContainer = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
