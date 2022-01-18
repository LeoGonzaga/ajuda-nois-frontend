import React from 'react';

import ActionButton from '@components/Buttons/ActionButton';
import TextInput from '@components/Inputs/TextInput';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container } from './styles';
export const Form: React.FC = () => {
  return (
    <Container>
      <Text center>Logar com o Google</Text>
      <Spacing vertical={10} />
      <ActionButton color={COLORS.SECONDARY} width="350px">
        Google
      </ActionButton>
      <Spacing vertical={10} />
      <Text>Prefiro acessar com meu email e senha</Text>

      <TextInput width="350px" placeholder="Digite seu email" />
      <TextInput width="350px" placeholder="Digite sua senha" />
      <Spacing vertical={20} />
      <ActionButton color={COLORS.PRIMARY} width="350px">
        Entrar
      </ActionButton>
    </Container>
  );
};
