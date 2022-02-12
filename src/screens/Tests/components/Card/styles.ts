import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.TEXT};

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  margin: 10px;

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;
