import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 95vh;
  padding: 20px;
  overflow-y: auto;
`;

export const Row = styled.div`
  display: flex;
  padding-top: 10px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
