import React from 'react';

import SecundaryButton from '@components/Buttons/SecundaryButton';

import { Container } from './styles';

export const Weekday: React.FC = () => {
  return (
    <Container>
      <SecundaryButton>DOM</SecundaryButton>
      <SecundaryButton>SEG</SecundaryButton>
      <SecundaryButton>TER</SecundaryButton>
      <SecundaryButton>QUA</SecundaryButton>
      <SecundaryButton>QUI</SecundaryButton>
      <SecundaryButton>SEX</SecundaryButton>
      <SecundaryButton>SAB</SecundaryButton>
    </Container>
  );
};
