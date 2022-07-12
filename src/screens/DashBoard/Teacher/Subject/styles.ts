import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
`;

export const Button = styled.div`
  background-color: ${({ theme }) => theme.NEUTRAL};
  height: 30px;
  margin: 5px 0px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 12px;
  font-weight: bold;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* margin-top: 10px; */
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  height: 100%;
`;
