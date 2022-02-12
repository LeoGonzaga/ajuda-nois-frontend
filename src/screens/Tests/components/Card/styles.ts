import styled from 'styled-components';

export const Container = styled.div<{ color: string }>`
  width: 220px;
  height: 100%;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.TEXT};

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  margin: 10px;

  div {
    color: ${({ color }) => color};
    font-size: 18px;
    margin-bottom: 5px;
    text-transform: uppercase;
    font-weight: bold;
  }

  transition: 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.PRIMARY};
  }
  a {
    color: ${({ color }) => color};
    margin-bottom: 2px;
  }
  p {
    font-size: 16px;
  }
`;
