import React from 'react';

import SecundaryButton from '@components/Buttons/SecundaryButton';

import { Wrapper } from '../../styles';

export const SelectSubject = (): JSX.Element => {
  return (
    <Wrapper>
      <SecundaryButton>Biologia</SecundaryButton>
      <SecundaryButton>Química</SecundaryButton>
      <SecundaryButton>Física</SecundaryButton>
      <SecundaryButton>História</SecundaryButton>
      <SecundaryButton>Geografia</SecundaryButton>
      <SecundaryButton>Filosofia</SecundaryButton>
      <SecundaryButton>Sociologia</SecundaryButton>
      <SecundaryButton>Português</SecundaryButton>
      <SecundaryButton>Literatura</SecundaryButton>
      <SecundaryButton>Inglês</SecundaryButton>
      <SecundaryButton>Matemática</SecundaryButton>
      <SecundaryButton>Redação</SecundaryButton>
    </Wrapper>
  );
};
