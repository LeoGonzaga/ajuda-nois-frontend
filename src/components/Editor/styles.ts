import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 90vw;
`;

export const Button = styled.button`
  background-color: ${COLORS.SECONDARY};
  border: 2px solid #fff;
  border-radius: 4px;
  padding: 10px;
  margin-right: 5px;
  color: #fff;
`;

export const EditorArea = styled.div`
  overflow-y: auto;
  height: 50vh;
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
  padding: 4px;
  background-color: gray;
  display: flex;
`;
