import React from 'react';

import { Container } from './styles';

export type SpacingTypes = {
  vertical?: number;
  horizontal?: number;
};

export const Spacing = (props: SpacingTypes): JSX.Element => {
  return <Container {...props} />;
};
