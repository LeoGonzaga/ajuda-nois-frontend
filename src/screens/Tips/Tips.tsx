import React from 'react';

import SecundaryButton from '@components/Buttons/SecundaryButton';
import Spacing from '@components/Spacing';
import Title from '@components/Title';

import { Container, Wrapper } from './styles';

export const Tips: React.FC = () => {
  return (
    <Container>
      <Title text="Buscar" contrast="dicas" />
      <Spacing vertical={10} />
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
    </Container>
  );
};
