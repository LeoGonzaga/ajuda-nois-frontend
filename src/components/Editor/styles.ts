import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 20px;
`;

export const Button = styled.button`
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 4px;
  padding: 4px;
  margin-right: 5px;
  color: #000;
`;

export const EditorArea = styled.div`
  margin-top: 10px;
  border: 1px solid ${({ theme }) => theme.BLACK};
  padding: 10px;
  border-radius: 4px;

  div {
    outline: none;
    min-height: 500px;
  }
`;
