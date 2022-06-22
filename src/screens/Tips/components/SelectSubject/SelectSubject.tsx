import React from 'react';

import SecondaryButton from '@components/Buttons/SecondaryButton';

import { Wrapper } from '../../styles';

export const SelectSubject = ({ active }: any): JSX.Element => {
  return (
    <Wrapper>
      <SecondaryButton active>História</SecondaryButton>
      <SecondaryButton>Geografia</SecondaryButton>
      <SecondaryButton>Filosofia</SecondaryButton>
      <SecondaryButton>Sociologia</SecondaryButton>
    </Wrapper>
  );
};
