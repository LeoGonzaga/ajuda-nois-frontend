import React from 'react';

import Spacing from '@components/Spacing';

import Expandable from '../../components/Expandable';
import { ColorTD, Container, Content } from './styles';

type Props = {
  size: number;
  name: string;
  lowRate: number;
  mediumRate: number;
};

type SimsProps = {
  name: string;
  quizAverage: number;
  sims: Array<any>;
};

export const StudentTable = ({
  size,
  name,
  lowRate,
  mediumRate,
}: Props): JSX.Element => {
  const simsNames = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
  ];
  const simsQuestions = [45, 45, 45, 30, 30, 40, 45];
  const data: Array<SimsProps> = [
    {
      name: 'Alan Bedoura de Pinto',
      quizAverage: 69,
      sims: [30, 45, 12, 24, 28, '-', 7],
    },
    {
      name: 'Botelho Kunavara',
      quizAverage: 88,
      sims: ['-', 5, 2, 14, 18, '-', 11],
    },
    {
      name: 'Yasmin Asbolla',
      quizAverage: 28,
      sims: [30, 45, 12, 24, 28, '-', 7],
    },
    {
      name: 'Alan Bedoura de Pinto',
      quizAverage: 69,
      sims: [30, 45, 12, 24, 28, '-', 25],
    },
    {
      name: 'Botelho Kunavara',
      quizAverage: 88,
      sims: [30, 45, 12, 24, 28, '-', 7],
    },
    {
      name: 'Yasmin Asbolla',
      quizAverage: 28,
      sims: [30, 45, 12, 24, 28, '-', 7],
    },
    {
      name: 'Alan Bedoura de Pinto',
      quizAverage: 69,
      sims: [30, 45, 12, 24, 28, '-', 7],
    },
    {
      name: 'Botelho Kunavara',
      quizAverage: 88,
      sims: [30, 45, 12, 24, 28, '-', 7],
    },
    {
      name: 'Yasmin Asbolla',
      quizAverage: 28,
      sims: [30, 45, 12, 24, 28, '-', 42],
    },
  ];

  return (
    <Container>
      <Expandable
        title="Alunos"
        subtitle={'Turma de ' + name}
        size={size}
        type="admin"
      >
        <Spacing vertical={10} />
        <Content>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>
                  <div>
                    Média <br /> Quizzes
                  </div>
                </th>
                {simsNames?.map((name, index) => {
                  return (
                    <th key={index}>
                      <div>
                        Simulado <br /> {name}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {data?.map(({ name, quizAverage, sims }, index) => {
                return (
                  <tr key={index}>
                    <ColorTD
                      value={
                        sims[sims.length - 1] != '-'
                          ? (sims[sims.length - 1] * 100) /
                            simsQuestions[sims.length - 1]
                          : '-'
                      }
                      low={lowRate}
                      medium={mediumRate}
                    >
                      {name}
                    </ColorTD>
                    <ColorTD
                      value={quizAverage}
                      low={lowRate}
                      medium={mediumRate}
                    >
                      {quizAverage} %
                    </ColorTD>
                    {sims.map((sim, simIndex) => {
                      return (
                        <ColorTD
                          key={simIndex}
                          value={
                            sim != '-'
                              ? (sim * 100) / simsQuestions[simIndex]
                              : '-'
                          }
                          low={lowRate}
                          medium={mediumRate}
                        >
                          {sim} / {simsQuestions[simIndex]}
                        </ColorTD>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Content>
      </Expandable>
    </Container>
  );
};
