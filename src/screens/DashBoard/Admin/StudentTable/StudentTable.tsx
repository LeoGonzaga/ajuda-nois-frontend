import React from 'react';

import Spacing from '@components/Spacing';

import Expandable from '../../components/Expandable';
import { Container, Content } from './styles';

type Props = {
  size: number;
};

export const StudentTable: React.FC<Props> = ({ size }: Props) => {
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
      <Expandable
        title="Alunos"
        subtitle="Matriculados neste ano"
        size={size}
        type="admin"
      >
        <Spacing vertical={10} />
        <Content>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>
                  <div>
                    Média <br /> Humanas
                  </div>
                </th>
                <th>
                  <div>
                    Média <br /> Natureza
                  </div>
                </th>
                <th>
                  <div>
                    Média <br /> Linguagens
                  </div>
                </th>
                <th>
                  <div>
                    Média <br /> Matemática
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {data?.map(
                (
                  {
                    name,
                    email,
                    humanScore,
                    natureScore,
                    languageScore,
                    mathScore,
                  },
                  index
                ) => {
                  return (
                    <tr key={index}>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>{humanScore}</td>
                      <td>{natureScore}</td>
                      <td>{languageScore}</td>
                      <td>{mathScore}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </Content>
      </Expandable>
    </Container>
  );
};
