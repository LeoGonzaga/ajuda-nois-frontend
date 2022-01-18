import styled from 'styled-components';

import { SpacingTypes } from './Spacing';

export const Container = styled.div<SpacingTypes>`
  margin-top: ${(props) =>
    props.vertical ? `${props.vertical}px` : 'initial'};

  margin-left: ${(props) =>
    props.horizontal ? `${props.horizontal}px` : 'initial'};

  margin-bottom: ${(props) =>
    props.vertical ? `${props.vertical}px` : 'initial'};

  margin-right: ${(props) =>
    props.horizontal ? `${props.horizontal}px` : 'initial'};
`;
