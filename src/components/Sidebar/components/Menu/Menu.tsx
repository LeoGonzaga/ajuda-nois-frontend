import React, { useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Container, Wrapper } from './styles';
import { GiHamburgerMenu } from 'react-icons/gi';

export type Props = {
  active: boolean;
  onClick: () => void;
};

export const Menu = ({ active, onClick }: Props): JSX.Element => {
  const handleExpand = () => {
    onClick();
  };

  return (
    <Container active={active} onClick={handleExpand}>
      <Wrapper active={active}>
        <GiHamburgerMenu /> <span>Menu</span>
      </Wrapper>
    </Container>
  );
};
