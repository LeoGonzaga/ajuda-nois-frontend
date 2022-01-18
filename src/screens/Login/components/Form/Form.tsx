import React from 'react';

import ActionButton from '@components/Buttons/ActionButton';
import TextInput from '@components/Inputs/TextInput';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import GoogleBtn from '../../../../../assets/google-btn.svg';
import { Container } from './styles';
export const Form: React.FC = () => {
  return (
    <Container>
      <Text center color={COLORS.WHITE} size={28} bold>
        Welcome!
      </Text>
      <Text color={COLORS.BLACK} center>
        Use these awesome forms to login or create new account <br />
        in your project for free.
      </Text>
      <Spacing vertical={10} />
      <ActionButton color={COLORS.WHITE} width="350px">
        <GoogleBtn />
      </ActionButton>
      <Spacing vertical={10} />
      <Text>Prefiro acessar com meu email e senha</Text>
      <Spacing vertical={5} />
      <TextInput width="350px" placeholder="Digite seu email" />
      <Spacing vertical={5} />
      <TextInput width="350px" placeholder="Digite sua senha" type="password" />
      <Spacing vertical={10} />
      <ActionButton color={COLORS.PRIMARY} width="350px">
        Entrar
      </ActionButton>
      <Spacing vertical={15} />
      <Text size={14} color={COLORS.WHITE}>
        Não tem conta? Crie uma agora.
      </Text>
    </Container>
  );
};
