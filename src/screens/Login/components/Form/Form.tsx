import React, { useCallback } from 'react';

import ActionButton from '@components/Buttons/ActionButton';
import TextInput from '@components/Inputs/TextInput';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';
import Router from 'next/router';
import { ROUTES } from 'src/routes/routes';

import GoogleBtn from '../../../../../assets/google-btn.svg';
import { Container } from './styles';
export const Form: React.FC = () => {
  const handleSubmit = useCallback(() => {
    Router.push(ROUTES.HOME);
  }, []);

  return (
    <Container>
      <Text color={COLORS.BLACK} center>
        Continuar com o google
      </Text>
      <Spacing vertical={20} />
      <ActionButton color={COLORS.WHITE} width="350px" onClick={handleSubmit}>
        <GoogleBtn />
      </ActionButton>
      <Spacing vertical={20} />
      <Text>Prefiro acessar com meu email e senha</Text>
      <Spacing vertical={10} />
      <Spacing vertical={5} />
      <TextInput width="350px" placeholder="Email" type="email" />
      <Spacing vertical={5} />
      <TextInput width="350px" placeholder="Senha" type="password" />
      <Spacing vertical={10} />
      <ActionButton color={COLORS.PRIMARY} width="350px" onClick={handleSubmit}>
        Entrar
      </ActionButton>
      <Spacing vertical={15} />
      <Text size={14} color={COLORS.WHITE}>
        Não tem conta?
      </Text>
      <Text color={COLORS.PRIMARY}>Crie uma agora.</Text>
    </Container>
  );
};
