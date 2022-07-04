import React, { useEffect, useState } from 'react';

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
  const [redNames, setRedNames] = useState(0);
  const [yellowNames, setYellowNames] = useState(0);
  const [simsNames, setSimsNames] = useState([
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
  ]);
  const [simsQuestions, setSimsQuestions] = useState([
    45, 45, 45, 30, 30, 40, 45,
  ]);
  const [data, setDate] = useState<SimsProps[]>([
    {
      name: 'Fulano de Souza',
      quizAverage: 69,
      sims: [30, 45, 12, 24, 28, '-', 7],
    },
    {
      name: 'Bryan Fortunato de Souza',
      quizAverage: 88,
      sims: [42, 5, 12, 14, 28, 45, 41],
    },
    {
      name: 'Breno Fortunato de Souza',
      quizAverage: 28,
      sims: [10, 45, 19, 19, 28, '-', 7],
    },
    {
      name: 'Renan Rodriguez Bizarri',
      quizAverage: 69,
      sims: [30, 45, 12, 24, 28, '-', 25],
    },
    {
      name: 'Renan Rodrigues Bizarri',
      quizAverage: 88,
      sims: [42, 45, 12, 24, 2, '-', 7],
    },
    {
      name: 'Beltrano da Silva',
      quizAverage: 28,
      sims: [3, 40, 17, 24, 29, '-', 7],
    },
    {
      name: 'Cicrano Pinto',
      quizAverage: 69,
      sims: [30, 45, 35, 24, 28, '-', 7],
    },
    {
      name: 'Leonardo Gonzaga Silva',
      quizAverage: 88,
      sims: [30, 45, 15, 24, 28, 19, 27],
    },
    {
      name: 'Desenvolvedor Pleno Senior',
      quizAverage: 28,
      sims: [30, 45, 12, 24, 28, '-', 42],
    },
  ]);

  const dataSorted: SimsProps[] = data.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <Container>
      <Expandable
        title="Alunos"
        subtitle={'Turma de ' + name}
        size={size}
        simSize={0}
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
              {dataSorted?.map(({ name, quizAverage, sims }, index) => {
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
