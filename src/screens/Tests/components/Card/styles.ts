import styled from 'styled-components';

export const Container = styled.div<{ color: string }>`
  width: 270px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.TEXT};

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin: 10px;

  div {
    color: ${({ color }) => color};
    font-size: 18px;
    margin-bottom: 5px;
    font-weight: bold;

    display: flex;
    align-items: center;
    text-transform: uppercase;
  }

  transition: 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.PRIMARY};
  }
  a {
    color: ${({ color }) => color};
    margin-left: 5px;
    padding: 3px 0px;
    text-transform: none;
  }
  p {
    font-size: 16px;
  }
`;
