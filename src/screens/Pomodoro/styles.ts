import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Spacer = styled.div`
  width: 0px;

  @media (max-width: 425px) {
    width: 60px;
  }

  @media (max-width: 1024px) {
    width: 60px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-left: 60px; */
  padding: 20px;
  height: 100vh;
  p {
    margin-bottom: 10px;
  }
`;
