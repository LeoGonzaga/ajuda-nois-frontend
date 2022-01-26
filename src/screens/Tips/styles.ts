import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding: 20px;
`;

export const Wrapper = styled.div``;

export const WrapperCards = styled.div`
  width: 100%;
  overflow-y: scroll;
  margin-bottom: -0.5em;
  -webkit-column-count: 3;
  -webkit-column-gap: 1.875em;
  -webkit-column-fill: auto;
  -moz-column-count: 3;
  -moz-column-gap: 0.5em;
  -moz-column-fill: auto;
  column-count: 3;
  column-gap: 0.5em;
  column-fill: auto;

  height: 500px;
`;
