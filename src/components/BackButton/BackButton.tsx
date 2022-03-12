import React from 'react';
import { IoArrowBackSharp } from 'react-icons/io5';

import Text from '@components/Text';
import { handleRedirect } from '@utils/functions';

import { Container } from './styles';

type Props = {
  route: string;
};

export const BackButton = ({ route }: Props): JSX.Element => {
  return (
    <Container onClick={() => handleRedirect(route)}>
      <IoArrowBackSharp size={30} />
    </Container>
  );
};
