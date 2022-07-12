import React, { useEffect } from 'react';

import Spacing from '@components/Spacing';

import Expandable from '../../components/Expandable';
import { Container, Content } from './styles';
type Props = {
  size: number;
  data: any;
};

export const TeacherTable = ({ size, data }: Props): JSX.Element => {
  const dataSorted = data?.sort((a: any, b: any) =>
    a.username.localeCompare(b.username)
  );

  useEffect(() => {
    size = dataSorted?.length;
  }, []);

  return (
    <Container>
      <Expandable
        title="Professores"
        subtitle="Cadastrados neste ano"
        size={dataSorted?.length + 1}
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
                <th>Áreas</th>
                <th>Disciplinas</th>
              </tr>
            </thead>

            <tbody>
              {dataSorted?.map(
                ({ username, email, fields, subjects }: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td>{username}</td>
                      <td>{email}</td>
                      <td>{fields}</td>
                      <td>{subjects}</td>
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
