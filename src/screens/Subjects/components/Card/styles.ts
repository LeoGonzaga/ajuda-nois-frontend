import styled from 'styled-components';

export const Container = styled.div<{ color: string; active: boolean }>`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  border: 1px solid
    ${({ theme, active }) => (active ? theme.PRIMARY : theme.TEXT)};

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  margin: 10px;

  transition: 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.PRIMARY};
  }

  h1 {
    font-size: 18px;
    margin-bottom: 5px;
    text-transform: uppercase;
    color: ${({ color }) => color};
  }

  span {
    font-size: 12px;
  }
`;
