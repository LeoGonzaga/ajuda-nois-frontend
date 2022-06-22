import styled from 'styled-components';

const Container = styled.form`
  width: 100%;
  max-width: 500px;
`;

const List = styled.div`
  background-color: #23232c;
  padding: 10px;
  overflow-y: scroll;
  height: 300px;
  cursor: pointer;
`;

const Row = styled.div`
  margin: 5px;
  input {
    margin-right: 5px;
  }
`;

export const Styles = {
  Container,
  List,
  Row,
};
