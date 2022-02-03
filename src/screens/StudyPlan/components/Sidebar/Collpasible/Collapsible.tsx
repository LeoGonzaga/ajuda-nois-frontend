import React from 'react';

import Spacing from '@components/Spacing';
import Text from '@components/Text';

import { Container } from './styles';

type Props = {
  name: string;
  active: boolean;
};

export function Collapsible({ name, active }: Props) {
  return (
    <Container>
      <span className={active ? 'active' : ''}>
        <Text size={16}>{name}</Text>
      </span>
      <Spacing vertical={2} />
      {active && (
        <div className="wrapper">
          <span className="content">Ativo</span>
        </div>
      )}
    </Container>
  );
}
