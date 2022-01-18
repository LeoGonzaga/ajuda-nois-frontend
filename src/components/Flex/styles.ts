import styled from 'styled-components';

import { FlexProps } from './Flex';

export const Container = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'initial')};
  justify-content: ${(props) => (props.justify ? props.justify : 'initial')};
  align-items: ${(props) => (props.align ? props.align : 'initial')};
  width: ${(props) => (props.width ? `${props.width}` : 'initial')};
  height: 100%;
  width: 100vw;
`;
