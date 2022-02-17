import React from 'react';

import SecondaryButton from '@components/Buttons/SecondaryButton';

import { Wrapper } from '../../styles';

export const SelectSubject = (): JSX.Element => {
  return (
    <Wrapper>
      <SecondaryButton>Biologia</SecondaryButton>
      <SecondaryButton>Química</SecondaryButton>
      <SecondaryButton>Física</SecondaryButton>
      <SecondaryButton>História</SecondaryButton>
      <SecondaryButton>Geografia</SecondaryButton>
      <SecondaryButton>Filosofia</SecondaryButton>
      <SecondaryButton>Sociologia</SecondaryButton>
      <SecondaryButton>Português</SecondaryButton>
      <SecondaryButton>Literatura</SecondaryButton>
      <SecondaryButton>Inglês</SecondaryButton>
      <SecondaryButton>Matemática</SecondaryButton>
      <SecondaryButton>Redação</SecondaryButton>
    </Wrapper>
  );
};
