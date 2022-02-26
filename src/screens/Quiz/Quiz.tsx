import React from 'react';

import EditorContainer from '@components/Editor';
import TextInput from '@components/Inputs/TextInput';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import Title from '@components/Title';

import { AwnserContainer, Container } from './styles';

export const Quiz = (): JSX.Element => {
  return (
    <Container>
      <Title text="Iniciar" contrast="quiz" />
      <Spacing vertical={5} />
      <EditorContainer showControls />
      <Spacing vertical={15} />
      <Text>Marque o checkbox para validar a resposta verdadeira.</Text>
      <Spacing vertical={15} />
      <AwnserContainer>
        <TextInput placeholder="Digite uma reposta" />
        <TextInput placeholder="Digite uma reposta" />
        <TextInput placeholder="Digite uma reposta" />
        <TextInput placeholder="Digite uma reposta" />
        <TextInput placeholder="Digite uma reposta" />
      </AwnserContainer>
    </Container>
  );
};
