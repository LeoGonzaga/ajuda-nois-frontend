import React from 'react';

import ActionButton from '@components/Buttons/ActionButton';
import Notification from '@components/Notification';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container, Wrapper } from './styles';
import { useFormLogin } from './useForm';

export const Form = (): JSX.Element => {
  const {
    errors,
    handleSubmit,
    onSubmit,
    register,
    handleCloseNotification,
    loading,
    message,
    apiError,
    openNotification,
  } = useFormLogin();

  return (
    <Container>
      <Notification
        open={openNotification}
        handleClose={handleCloseNotification}
        message={message}
        error={apiError}
        autoClose={3}
      />
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
        <Spacing vertical={3} />
        <Text color={COLORS.RED} center>
          {errors.email?.message}
        </Text>

        <Spacing vertical={5} />
        <input
          width="350px"
          placeholder="Senha"
          type="password"
          {...register('password')}
        />
        <Spacing vertical={3} />
        <Text color={COLORS.RED} center>
          {errors.password?.message}
        </Text>
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
          loading={loading}
          disabled={Object.keys(errors)?.length > 0 || loading}
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
