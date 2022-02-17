import React from 'react';

import SecondaryButton from '@components/Buttons/SecondaryButton';

import { Container } from './styles';

export const Weekday: React.FC = () => {
  return (
    <Container>
      <SecondaryButton>DOM</SecondaryButton>
      <SecondaryButton>SEG</SecondaryButton>
      <SecondaryButton>TER</SecondaryButton>
      <SecondaryButton>QUA</SecondaryButton>
      <SecondaryButton>QUI</SecondaryButton>
      <SecondaryButton>SEX</SecondaryButton>
      <SecondaryButton>SAB</SecondaryButton>
    </Container>
  );
};
