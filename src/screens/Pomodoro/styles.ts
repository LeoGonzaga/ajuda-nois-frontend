import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Spacer = styled.div`
  width: 0px;

  @media (min-width: 425px) and (max-width: 1023px) {
    width: 0px;
  }

  @media (min-width: 1024px) {
    width: 60px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin-bottom: 10px;
  }
`;
