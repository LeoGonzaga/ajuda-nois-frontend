import React from 'react';

import ActionButton from '@components/Buttons/ActionButton';
import Notification from '@components/Notification';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';
import Link from 'next/link';
import { ROUTES } from 'src/routes/routes';

import { Container } from './styles';
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
    verifyToken,
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

      {verifyToken ? (
        <div>
          <Text bold size={22}>
            Calma! Vamos recuperar sua senha :p
          </Text>
          <Spacing vertical={5} />
          <input
            width="350px"
            placeholder="Digite sua nova senha"
            type="password"
            {...register('password')}
          />

          <Spacing vertical={13} />
          <input
            width="350px"
            placeholder="Digite sua nova senha mais uma vez"
            type="password"
            {...register('confirm')}
          />

          <Spacing vertical={3} />
          <Text color={COLORS.RED} center>
            {errors.password?.message}
          </Text>

          <Spacing vertical={10} />
          <ActionButton
            color={COLORS.SECONDARY}
            width="350px"
            loading={loading}
            disabled={loading}
            onClick={handleSubmit(onSubmit)}
          >
            Alterar senha
          </ActionButton>
          <Link href={ROUTES.LOGIN}>Voltar</Link>
          <Spacing vertical={5} />
        </div>
      ) : (
        <Text bold size={22}>
          Aguarde um instante! Estamos validando um negocinho.
        </Text>
      )}
    </Container>
  );
};
