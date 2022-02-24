import React from 'react';
import { BiError } from 'react-icons/bi';

import Flex from '@components/Flex';

import { Container, InputError } from './styles';

type Props = {
  showError: boolean;
  children: React.ReactNode;
};

export function Subject({ showError, children }: Props) {
  return (
    <Container>
      <Flex direction="column" align="center" justify="flex-end">
        <Flex align="center" justify="center">
          <label htmlFor="startTime">
            <strong>Disciplina:</strong>
          </label>
          {children}
        </Flex>
        {showError && (
          <InputError>
            <BiError size={15} />
            Selecione uma matéria
          </InputError>
        )}
      </Flex>
    </Container>
  );
}
