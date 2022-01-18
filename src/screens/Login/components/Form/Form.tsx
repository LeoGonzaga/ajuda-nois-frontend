import React from 'react';

import ActionButton from '@components/Buttons/ActionButton';
import TextInput from '@components/Inputs/TextInput';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container } from './styles';
//Adicionar espaçamento nesse card
export const Form: React.FC = () => {
  return (
    <Container>
      <Text>Logar com o Google</Text>
      <ActionButton color={COLORS.SECONDARY} width="350px">
        Google
      </ActionButton>
      <Text>Prefiro acessar com meu email e senha</Text>

      <TextInput width="350px" />
      <TextInput width="350px" />

      <ActionButton color={COLORS.PRIMARY} width="350px">
        Entrar
      </ActionButton>
    </Container>
  );
};
