import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

type Props = {
  background: string;
};

export const SubjectCards = styled.button`
  width: 250px;
  height: 300px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.NEUTRAL};
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  border: none;
  outline: none;
`;

export const Circle = styled.div<Props>`
  height: 180px;
  width: 180px;
  border-radius: 50%;
  background-color: ${(props) => props.background};
`;

export const BackButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;

  border: none;
`;
