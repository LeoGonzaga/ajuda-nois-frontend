import styled from 'styled-components';

export const Container = styled.div``;

export const Button = styled.button`
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 4px;
  padding: 4px;
  margin-right: 5px;
  color: #000;
`;

export const EditorArea = styled.div`
  /* border: 1px solid ${({ theme }) => theme.BLACK}; */

  padding: 10px 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
  div {
    outline: none;
    min-height: 50vh;
    padding: 0px 10px;
  }
`;

export const UploadImageContainer = styled.div`
  input {
    display: none;
  }

  img {
    width: 30px;
    cursor: pointer;
  }
`;

export const Header = styled.div`
  border-radius: 4px;
  padding: 4px 0px;
`;
