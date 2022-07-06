import React, { useState } from 'react';

import Spacing from '@components/Spacing';

import Expandable from '../../components/Expandable';
import { Container, Content } from './styles';

type Props = {
  size: number;
};

export const StudentTable = ({ size }: Props): JSX.Element => {
  const [data, setData] = useState([
    {
      name: 'Bryan aluno',
      email: 'bryanf@comprovei.com',
      humanScore: '27/45',
      natureScore: '32/45',
      languageScore: '35/45',
      mathScore: '33/45',
    },
    {
      name: 'Sebastião Carrara',
      email: 'mario02@faro.com.br',
      humanScore: '40/45',
      natureScore: '40/45',
      languageScore: '40/45',
      mathScore: '40/45',
    },
    {
      name: 'Horácio Vale',
      email: 'matos.catarina@pacheco.br',
      humanScore: '15/45',
      natureScore: '25/45',
      languageScore: '35/45',
      mathScore: '45/45',
    },
    {
      name: 'Fernando Esteves',
      email: 'pontes.benjamin@r7.com',
      humanScore: '27/45',
      natureScore: '32/45',
      languageScore: '35/45',
      mathScore: '33/45',
    },
    {
      name: 'Joaquin Madeira',
      email: 'sebastiao.chaves@hotmail.com',
      humanScore: '40/45',
      natureScore: '40/45',
      languageScore: '40/45',
      mathScore: '40/45',
    },
    {
      name: 'Marcos Ferraz',
      email: 'laura.vega@hotmail.com',
      humanScore: '15/45',
      natureScore: '25/45',
      languageScore: '35/45',
      mathScore: '45/45',
    },
    {
      name: 'Hugo Pacheco',
      email: 'elias.rivera@r7.com',
      humanScore: '27/45',
      natureScore: '32/45',
      languageScore: '35/45',
      mathScore: '33/45',
    },
    {
      name: 'Carla Colaço',
      email: 'escobar.bianca@benites.net.br',
      humanScore: '40/45',
      natureScore: '40/45',
      languageScore: '40/45',
      mathScore: '40/45',
    },
  ]);

  const dataSorted = data.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Container>
      <Expandable
        title="Alunos"
        subtitle="Matriculados neste ano"
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
              {dataSorted?.map(
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
