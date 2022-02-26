import React from 'react';
import { BiError } from 'react-icons/bi';

import Flex from '@components/Flex';

import { Container, InputError } from './styles';

type Props = {
  showError: boolean;
  children: React.ReactNode;
};

export function StartTime({ showError, children }: Props) {
  return (
    <Container>
      <Flex direction="column" align="center" justify="flex-end">
        <Flex align="center" justify="center">
          <label htmlFor="startTime">
            <strong>Início - </strong>
          </label>
          {children}
        </Flex>
        {showError && (
          <InputError>
            <BiError size={15} />
            Insira um horário de início
          </InputError>
        )}
      </Flex>
    </Container>
  );
}
