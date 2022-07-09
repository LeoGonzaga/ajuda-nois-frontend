import React from 'react';

import Spacing from '@components/Spacing';
import Title from '@components/Title';
import { getRandomColors } from '@utils/functions';

import Card from './components/Card';
import { Container, Content, WrapperCards } from './styles';
import useTips from './useTips';

export const Tips = (): JSX.Element => {
  const { data } = useTips();
  return (
    <Container>
      <Title text="Buscar" contrast="dicas" subText="" />
      <Spacing vertical={10} />
      <Content>
        <WrapperCards>
          {data?.map(({ name, content }) => (
            <Card
              name={name}
              information={content}
              key={name}
              color={getRandomColors(0, 3)}
            />
          ))}
        </WrapperCards>
      </Content>
    </Container>
  );
};
