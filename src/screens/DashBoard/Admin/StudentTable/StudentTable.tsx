import React, { useState } from 'react';

import Spacing from '@components/Spacing';

import Expandable from '../../components/Expandable';
import { Container, Content } from './styles';

type Props = {
  size: number;
  data: any;
};

export const StudentTable = ({ size, data }: Props): JSX.Element => {
  // const [data, setData] = useState([
  //   {
  //     name: 'Fulano de Souza',
  //     email: 'fulanosouza@hotmail.com',
  //     humanScore: '27/45',
  //     natureScore: '32/45',
  //     languageScore: '35/45',
  //     mathScore: '33/45',
  //   },
  //   {
  //     name: 'Bryan Fortunato de Souza',
  //     email: 'azuosbryan@yahoo.com.br',
  //     humanScore: '40/45',
  //     natureScore: '40/45',
  //     languageScore: '40/45',
  //     mathScore: '40/45',
  //   },
  //   {
  //     name: 'Breno Fortunato de Souza',
  //     email: 'brenofortunato@gmail.com',
  //     humanScore: '15/45',
  //     natureScore: '25/45',
  //     languageScore: '35/45',
  //     mathScore: '45/45',
  //   },
  //   {
  //     name: 'Renan Rodriguez Bizarri',
  //     email: 'rrb@hotmail.com',
  //     humanScore: '27/45',
  //     natureScore: '32/45',
  //     languageScore: '35/45',
  //     mathScore: '33/45',
  //   },
  //   {
  //     name: 'Renan Rodrigues Bizarri',
  //     email: 'renanbiz@yahoo.com.br',
  //     humanScore: '40/45',
  //     natureScore: '40/45',
  //     languageScore: '40/45',
  //     mathScore: '40/45',
  //   },
  //   {
  //     name: 'Beltrano da Silva',
  //     email: 'bds@gmail.com',
  //     humanScore: '15/45',
  //     natureScore: '25/45',
  //     languageScore: '35/45',
  //     mathScore: '45/45',
  //   },
  //   {
  //     name: 'Cicrano Pinto',
  //     email: 'cicpinto@hotmail.com',
  //     humanScore: '27/45',
  //     natureScore: '32/45',
  //     languageScore: '35/45',
  //     mathScore: '33/45',
  //   },
  //   {
  //     name: 'Leonardo Gonzaga Silva',
  //     email: 'lgs@yahoo.com.br',
  //     humanScore: '40/45',
  //     natureScore: '40/45',
  //     languageScore: '40/45',
  //     mathScore: '40/45',
  //   },
  //   {
  //     name: 'Desenvolvedor Pleno Senior',
  //     email: 'develper@gmail.com',
  //     humanScore: '15/45',
  //     natureScore: '25/45',
  //     languageScore: '35/45',
  //     mathScore: '45/45',
  //   },
  // ]);

  const dataSorted = data?.sort((a: any, b: any) =>
    a.username.localeCompare(b.username)
  );

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
                    username,
                    email,
                    humanScore,
                    natureScore,
                    languageScore,
                    mathScore,
                  }: any,
                  index: number
                ) => {
                  return (
                    <tr key={index}>
                      <td>{username}</td>
                      <td>{email}</td>
                      <td>{humanScore || '0/45'}</td>
                      <td>{natureScore || '0/45'}</td>
                      <td>{languageScore || '0/45'}</td>
                      <td>{mathScore || '0/45'}</td>
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
