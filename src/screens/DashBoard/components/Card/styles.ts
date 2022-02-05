import styled from 'styled-components';

export const Container = styled.div``;

export const Circle = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.SECONDARY};

  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 30px;
    font-weight: bold;
  }
`;
