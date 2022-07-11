import React from 'react';

import ActionButton from '@components/Buttons/ActionButton';
import Notification from '@components/Notification';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';
import Link from 'next/link';
import { ROUTES } from 'src/routes/routes';

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
        <Text bold size={22}>
          Calma! Vamos recuperar sua senha :p
        </Text>
        <Spacing vertical={5} />
        <form action="">
          <input
            width="350px"
            placeholder="Digite seu email"
            type="email"
            {...register('email')}
          />

          <Spacing vertical={3} />
          <Text color={COLORS.RED} center>
            {errors.email?.message}
          </Text>

          <Spacing vertical={10} />
          <ActionButton
            color={COLORS.SECONDARY}
            width="350px"
            loading={loading}
            disabled={loading}
            onClick={handleSubmit(onSubmit)}
          >
            Enviar
          </ActionButton>
        </form>
        <Spacing vertical={5} />
        <Link href={ROUTES.LOGIN}>Voltar</Link>
      </div>
    </Container>
  );
};
