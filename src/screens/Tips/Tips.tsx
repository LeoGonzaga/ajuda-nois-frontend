import React from 'react';

import Spacing from '@components/Spacing';
import Title from '@components/Title';
import { COLORS } from '@themes/colors';
import { getRandomColors } from '@utils/functions';

import Card from './components/Card';
import SelectSubject from './components/SelectSubject';
import { Container, WrapperCards } from './styles';
import useTips from './useTips';

export const Tips = (): JSX.Element => {
  const { data } = useTips();
  return (
    <Container>
      <Title
        text="Buscar"
        contrast="dicas"
        subText="Selecione a matéria abaixo para filtrar"
      />
      <Spacing vertical={10} />
      <WrapperCards>
        {data?.map(({ name, information }) => (
          <Card
            name={name}
            information={information}
            key={name}
            color={getRandomColors(0, 3)}
          />
        ))}
      </WrapperCards>
    </Container>
  );
};
