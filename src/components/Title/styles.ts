import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  span {
    display: flex;
  }

  @media (min-width: 425px) and (max-width: 1023px) {
    align-items: center;
    margin-left: 30px;

    span + p {
      display: none;
    }
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;
