import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
  padding: 16px;
  margin-top: 50px;
  margin-right: 30px;

  @media (min-width: 425px) and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 50px;
    margin: 30px 0;

    p:first-child {
      text-align: center;
      font-size: 18px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 50px;
    margin: 30px 0;
  }
`;
