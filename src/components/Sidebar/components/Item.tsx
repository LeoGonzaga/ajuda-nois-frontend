import React, { useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Container, Wrapper } from './styles';

export type Props = {
  active?: boolean;
  expanded: boolean;
  text: string;
  icon?: React.ComponentProps<any>;
  router?: string;
};

export const Item = ({ text, icon, router, expanded }: Props): JSX.Element => {
  const { pathname } = useRouter();

  const clearStorage = (text: string) => {
    if (text === 'Sair') {
      localStorage.clear();
    }
  };

  return (
    <Container active={pathname === router}>
      <Link href={router || '/'}>
        <Wrapper onClick={() => clearStorage(text)} expanded={expanded}>
          {icon} <span>{text}</span>
        </Wrapper>
      </Link>
    </Container>
  );
};
