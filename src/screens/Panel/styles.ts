import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

type Props = {
  background: string;
};

export const SubjectCards = styled.button<Props>`
  width: 250px;
  height: 300px;
  border-radius: 16px;
  /* background-color: ${(props) => props.background}; */
  background-color: white;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  border: none;
  outline: none;
`;

export const Circle = styled.div`
  height: 180px;
  width: 180px;
  border-radius: 50%;
  background-color: blue;
`;
