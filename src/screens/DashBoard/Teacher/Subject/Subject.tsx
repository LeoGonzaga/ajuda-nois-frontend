import React from 'react';

import Spacing from '@components/Spacing';

import Expandable from '../../components/Expandable';
import { Container, Content } from './styles';

type Props = {
  name: string;
  topics: Array<string>;
  quizRates: Array<number>;
  children: React.ReactNode;
};

export const Subject: React.FC<Props> = ({
  name,
  topics,
  quizRates,
  children,
}: Props) => {
  const data = [
    {
      name: 'Alan Bedoura de Pinto',
      email: 'l337g4m3r@hotmail.com',
      humanScore: '27/45',
      natureScore: '32/45',
      languageScore: '35/45',
      mathScore: '33/45',
    },
    {
      name: 'Botelho Kunavara',
      email: 'ex.ample@yahoo.com.br',
      humanScore: '40/45',
      natureScore: '40/45',
      languageScore: '40/45',
      mathScore: '40/45',
    },
    {
      name: 'Yasmin Asbolla',
      email: 'ligma@gmail.com',
      humanScore: '15/45',
      natureScore: '25/45',
      languageScore: '35/45',
      mathScore: '45/45',
    },
    {
      name: 'Alan Bedoura de Pinto',
      email: 'l337g4m3r@hotmail.com',
      humanScore: '27/45',
      natureScore: '32/45',
      languageScore: '35/45',
      mathScore: '33/45',
    },
    {
      name: 'Botelho Kunavara',
      email: 'ex.ample@yahoo.com.br',
      humanScore: '40/45',
      natureScore: '40/45',
      languageScore: '40/45',
      mathScore: '40/45',
    },
    {
      name: 'Yasmin Asbolla',
      email: 'ligma@gmail.com',
      humanScore: '15/45',
      natureScore: '25/45',
      languageScore: '35/45',
      mathScore: '45/45',
    },
    {
      name: 'Alan Bedoura de Pinto',
      email: 'l337g4m3r@hotmail.com',
      humanScore: '27/45',
      natureScore: '32/45',
      languageScore: '35/45',
      mathScore: '33/45',
    },
    {
      name: 'Botelho Kunavara',
      email: 'ex.ample@yahoo.com.br',
      humanScore: '40/45',
      natureScore: '40/45',
      languageScore: '40/45',
      mathScore: '40/45',
    },
    {
      name: 'Yasmin Asbolla',
      email: 'ligma@gmail.com',
      humanScore: '15/45',
      natureScore: '25/45',
      languageScore: '35/45',
      mathScore: '45/45',
    },
  ];
  return (
    <Container>
      <Expandable title={name} size={10} type="teacher">
        <Content>{children}</Content>
      </Expandable>
    </Container>
  );
};
