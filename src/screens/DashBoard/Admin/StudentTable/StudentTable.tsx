import React, { useEffect, useState } from 'react';

import Spacing from '@components/Spacing';

import Expandable from '../../components/Expandable';
import { Container, Content } from './styles';

type Props = {
  size: number;
  data: any;
};

export const StudentTable = ({ size, data }: Props): JSX.Element => {
  const dataSorted = data?.sort((a: any, b: any) =>
    a.username.localeCompare(b.username)
  );

  useEffect(() => {
    size = dataSorted?.length;
  }, [data]);

  return (
    <Container>
      <Expandable
        title="Alunos"
        subtitle="Matriculados neste ano"
        size={dataSorted?.length}
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
                ({ username, email, mock_exams }: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td>{username}</td>
                      <td>{email}</td>
                      <td>{mock_exams[0]?.human_sciences_score || 0} /45</td>
                      <td>{mock_exams[0]?.natural_sciences_score || 0} /45</td>
                      <td>{mock_exams[0]?.languages_score || 0} /45</td>
                      <td>{mock_exams[0]?.mathematics_score || 0} /45</td>
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
