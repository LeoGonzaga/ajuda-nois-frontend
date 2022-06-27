import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div<{ width?: string }>`
  width: ${(props) => (props.width ? props.width : '90vw')};

  img {
    width: 100%;
  }
`;

export const Button = styled.button`
  background-color: ${COLORS.SECONDARY};
  border: 2px solid #fff;
  border-radius: 4px;
  padding: 10px;
  margin-right: 5px;
  color: #fff;
`;

export const SaveChanges = styled.button`
  padding: 10px;
  display: flex;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 15px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.SECONDARY};
  }
`;

export const EditorArea = styled.div<{
  height?: string;
}>`
  overflow-y: auto;
  height: ${(props) => (props.height ? props.height : '30vh')};
  padding: 10px 4px;
  border-radius: 4px;
  border: ${(props) => (props?.height ? 'none' : ' 1px solid #ccc')};
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
