import React from 'react';

import ActionButton from '@components/Buttons/ActionButton';
import TextInput from '@components/Inputs/TextInput';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container, Wrapper } from './styles';
import { useFormLogin } from './useForm';

export const Form = (): JSX.Element => {
  const { errors, handleSubmit, onSubmit, register } = useFormLogin();
  console.log(Object.keys(errors)?.length);
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
        <input
          width="350px"
          placeholder="Email"
          type="email"
          {...register('email')}
        />
        <p>{errors.email?.message}</p>
        <Spacing vertical={5} />
        <input
          width="350px"
          placeholder="Senha"
          type="password"
          {...register('password')}
        />
        <p>{errors.password?.message}</p>
        <Wrapper>
          <label>
            <input type="checkbox" name="" id="" />
            <Text size={14}>Lembrar senha</Text>
          </label>
        </Wrapper>

        <Spacing vertical={10} />
        <ActionButton
          color={COLORS.SECONDARY}
          width="350px"
          disabled={Object.keys(errors)?.length > 0}
          onClick={handleSubmit(onSubmit)}
        >
          Entrar
        </ActionButton>
        <Spacing vertical={5} />

        <Spacing vertical={10} />
        <Text size={14}>Esqueci senha</Text>
      </div>
    </Container>
  );
};
