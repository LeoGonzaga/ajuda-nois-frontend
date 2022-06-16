import React from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';

import Spacing from '@components/Spacing';
import Text from '@components/Text';

import { Container } from './styles';

type Props = {
  text: string;
};

export const EmptyState = ({ text }: Props): JSX.Element => {
  return (
    <Container>
      <AiFillInfoCircle size={40} />
      <Spacing vertical={10} />
      <Text>{text}</Text>
    </Container>
  );
};
