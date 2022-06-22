import { COLORS } from '@themes/colors';
import styled from 'styled-components';

const Container = styled.form`
  textarea {
    width: 100%;
    padding: 10px;
    background-color: #23232c;
    color: #fff;
    margin-left: 10px;
  }
`;

const AddQuestion = styled.button`
  border-radius: 5px;
  padding: 5px;
  background-color: ${COLORS.SECONDARY};
  border: none;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Styles = {
  Container,
  AddQuestion,
  Flex,
};
