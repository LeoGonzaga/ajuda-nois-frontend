import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Container, Wrapper } from './styles';

export type Props = {
  active?: boolean;
  text?: string;
  icon?: React.ComponentProps<any>;
  router?: string;
};

export const Item = ({ text, icon, router }: Props) => {
  const { pathname } = useRouter();
  return (
    <Container active={pathname === router}>
      <Link href={router || '/'}>
        <Wrapper>
          {icon} <span>{text}</span>
        </Wrapper>
      </Link>
    </Container>
  );
};
