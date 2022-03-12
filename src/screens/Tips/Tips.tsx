import React from 'react';

import Spacing from '@components/Spacing';
import Title from '@components/Title';
import { COLORS } from '@themes/colors';
import { getRandomColors } from '@utils/functions';

import Card from './components/Card';
import SelectSubject from './components/SelectSubject';
import { Container, WrapperCards } from './styles';

export const Tips = (): JSX.Element => {
  const data = [
    {
      title: 'Titulo 1',
      text: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beentandard dummy text ever sin',
    },
    {
      title: 'Titulo 2',
      text: 'orem Ipsum is simply dummy text of the  the printing and text of the pri the printing and text of the pri the printing and text of the pri the printing and text of the pri the printing and text of the pri the printing and text of the prindard dummy text ever sin',
    },
    {
      title: 'Titulo 3',
      text: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beentandard dummy text ever sin',
    },
    {
      title: 'Titulo 4',
      text: 'orem Ipsum is simply dummy text of the printing and text of the printing and text of the printing and typesetting industry. Lorem Ipsum has beentandard dummy text ever sin',
    },
    {
      title: 'Titulo 1',
      text: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beentandard dummy text ever sin',
    },
    {
      title: 'Titulo 2',
      text: 'orem Ipsum is simply dummy text of the  the printing and text of the pri the printing and text of the pri the printing and text of the pri the printing and text of the pri the printing and text of the pri the printing and text of the prindard dummy text ever sin',
    },
    {
      title: 'Titulo 3',
      text: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beentandard dummy text ever sin',
    },
    {
      title: 'Titulo 4',
      text: 'orem Ipsum is simply dummy text of the printing and text of the printing and text of the printing and typesetting industry. Lorem Ipsum has beentandard dummy text ever sin',
    },
    {
      title: 'Titulo 1',
      text: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beentandard dummy text ever sin',
    },
    {
      title: 'Titulo 2',
      text: 'orem Ipsum is simply dummy text of the  the printing and text of the pri the printing and text of the pri the printing and text of the pri the printing and text of the pri the printing and text of the pri the printing and text of the prindard dummy text ever sin',
    },
    {
      title: 'Titulo 3',
      text: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beentandard dummy text ever sin',
    },
    {
      title: 'Titulo 4',
      text: 'orem Ipsum is simply dummy text of the printing and text of the printing and text of the printing and typesetting industry. Lorem Ipsum has beentandard dummy text ever sin',
    },
  ];
  return (
    <Container>
      <Title
        text="Buscar"
        contrast="dicas"
        subText="Selecione a matéria abaixo para filtrar"
      />
      <Spacing vertical={10} />
      <SelectSubject />
      <WrapperCards>
        {data?.map(({ title, text }) => (
          <Card
            text={text}
            title={title}
            key={title}
            color={getRandomColors(0, 3)}
          />
        ))}
      </WrapperCards>
    </Container>
  );
};
