import React from 'react';

import { Styles } from './styles';

export const LoadingTable = (): JSX.Element => {
  return (
    <Styles.Container>
      <Styles.SSkeletonLine />
      <Styles.SSkeletonLine />
      <Styles.SSkeletonLine />
    </Styles.Container>
  );
};
