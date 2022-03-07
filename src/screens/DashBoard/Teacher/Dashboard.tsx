import React from 'react';

import SecondaryButton from '@components/Buttons/SecondaryButton';
import Spacing from '@components/Spacing';
import Title from '@components/Title';

import { Container, Controls } from './styles';
import Subject from './Subject';

export const Dashboard: React.FC = () => {
  const data = [
    {
      name: 'Geografia',
      topics: ['Planetas', 'Minérios', 'Bacias Hidrográficas', 'Relevo'],
      quizRates: [78, 55, 83, 12],
    },
    {
      name: 'Matemática',
      topics: [
        'Equações 1º Grau',
        'Equações 2º Grau',
        'Inequações',
        'Geometria',
        'Funções',
        'Juros',
        'Operações Complexas',
      ],
      quizRates: [89, 52, 23, 42, 88, 97, 19],
    },
    {
      name: 'Inglês',
      topics: [],
      quizRates: [],
    },
  ];

  return (
    <Container>
      <Controls>
        <Title text="Dashboard" contrast="" subText="" />
        <SecondaryButton>Configurações</SecondaryButton>
      </Controls>
      <Spacing vertical={5} />
      {data?.map(({ name, topics, quizRates }, index) => {
        return (
          <>
            <Subject
              key={index}
              name={name}
              topics={topics}
              quizRates={quizRates}
            />
          </>
        );
      })}
    </Container>
  );
};
