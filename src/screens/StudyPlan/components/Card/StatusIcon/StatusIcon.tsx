import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import { IoWarningOutline } from 'react-icons/io5';
import { RiLoader4Line } from 'react-icons/ri';

import { COLORS } from '@themes/colors';

import { Container } from './styles';

type Props = {
  status: string;
};

export const StatusIcon: React.FC<Props> = ({ status }: Props) => {
  return (
    <Container>
      {status == 'idle' ? (
        <RiLoader4Line color={COLORS.GRAY} />
      ) : status == 'completed' ? (
        <BsCheck2Circle color={COLORS.SECONDARY} />
      ) : (
        <IoWarningOutline color={COLORS.ERROR} />
      )}
    </Container>
  );
};
