import React from 'react';
import { BiError } from 'react-icons/bi';

import Flex from '@components/Flex';

import { Container, InputError, Row } from './styles';

type Props = {
  showError: boolean;
  children: React.ReactNode;
};

export function Subject({ showError, children }: Props): JSX.Element {
  return (
    <Container>
      <Flex direction="column" align="center" justify="flex-end">
        <Row>
          <label htmlFor="startTime">
            <strong>Disciplina:</strong>
          </label>
          {children}
        </Row>
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
