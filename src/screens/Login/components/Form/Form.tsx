import React, { useCallback } from 'react';

import ActionButton from '@components/Buttons/ActionButton';
import TextInput from '@components/Inputs/TextInput';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';
import Router from 'next/router';
import { ROUTES } from 'src/routes/routes';

import GoogleBtn from '../../../../../assets/google-btn.svg';
import { Container, Wrapper } from './styles';

export const Form = (): JSX.Element => {
  const handleSubmit = useCallback(() => {
    Router.push(ROUTES.HOME);
  }, []);

  return (
    <Container>
      <div>
        <Text color={COLORS.BLACK} center>
          Bem vindo(a) de volta!
        </Text>

        <Text bold size={26}>
          Acessar com a minha conta
        </Text>
        <Spacing vertical={10} />
        <Spacing vertical={5} />
        <TextInput width="350px" placeholder="Email" type="email" />
        <Spacing vertical={5} />
        <TextInput width="350px" placeholder="Senha" type="password" />

        <Wrapper>
          <div>
            <input type="checkbox" name="" id="" />
            <Text size={14}>Lembrar senha</Text>
          </div>
        </Wrapper>

        <Spacing vertical={10} />
        <ActionButton
          color={COLORS.SECONDARY}
          width="350px"
          onClick={handleSubmit}
        >
          Entrar
        </ActionButton>
        <Spacing vertical={5} />

        <ActionButton
          color={COLORS.BUTTON}
          width="350px"
          onClick={handleSubmit}
        >
          <GoogleBtn />
        </ActionButton>
        <Spacing vertical={10} />
        <Text size={14}>Esqueci senha</Text>
      </div>
    </Container>
  );
};
