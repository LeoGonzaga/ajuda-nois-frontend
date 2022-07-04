import React from 'react';

import Spacing from '@components/Spacing';

import Expandable from '../../components/Expandable';
import { Container, Content } from './styles';

type Props = {
  size: number;
};

export const TeacherTable = ({ size }: Props): JSX.Element => {
  const data = [
    {
      name: 'Professor de Humanas',
      email: 'prof_human@hotmail.com',
      fields: 'Humanas',
      subjects: 'Geografia, História',
    },
    {
      name: 'English Teacher',
      email: 'english@gmail.com',
      fields: 'Linguagens',
      subjects: 'Inglês',
    },
    {
      name: 'Professor de Cálculos',
      email: 'calc_prof@gmail.com.br',
      fields: 'Matemática, Natureza',
      subjects: 'Matemática, Física',
    },
  ];

  return (
    <Container>
      <Expandable
        title="Professores"
        subtitle="Cadastrados neste ano"
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
                <th>Áreas</th>
                <th>Disciplinas</th>
              </tr>
            </thead>

            <tbody>
              {data?.map(({ name, email, fields, subjects }, index) => {
                return (
                  <tr key={index}>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{fields}</td>
                    <td>{subjects}</td>
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
