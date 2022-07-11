import styled from 'styled-components';

export const Container = styled.div<{ color: string; active: boolean }>`
  width: 200px;
  border-radius: 8px;
  border: 1px solid
    ${({ theme, active, color }) => (active ? color : theme.TEXT)};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: 10px;

  transition: 0.2s;
  cursor: pointer;
  &:hover {
    border-color: ${({ color }) => color};
  }

  h1 {
    font-size: 18px;
    margin-bottom: 5px;
    text-transform: uppercase;
    color: ${({ color }) => color};
    margin-left: 10px;
  }

  span {
    font-size: 12px;
  }

  @media (min-width: 425px) and (max-width: 1023px) {
    height: 81px;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    height: 81px;
  }
`;
