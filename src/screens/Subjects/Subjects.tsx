import React from 'react';
import { AiOutlineCalculator } from 'react-icons/ai';
import { BsChatLeftQuote } from 'react-icons/bs';
import { GiGreekTemple } from 'react-icons/gi';
import { IoTelescopeOutline } from 'react-icons/io5';

import Title from '@components/Title';

import Card from './components/Card';
import { Container } from './styles';

export const Subjects: React.FC = () => {
  return (
    <Container>
      <Title text="Escolher" contrast="matéria" />
      <Card
        title={'Matemática e suas Tecnologias'}
        color="#00c86f"
        icon={<AiOutlineCalculator />}
      />
      <Card
        title={'Ciencias Humanas'}
        color="#6bd1ff"
        icon={<GiGreekTemple />}
      />
      <Card
        title={'Ciências da natureza'}
        color="#dc6ebe"
        icon={<IoTelescopeOutline />}
      />
      <Card
        title={'Linguagens e códigos'}
        color="#ff8c2a"
        icon={<BsChatLeftQuote />}
      />
    </Container>
  );
};
