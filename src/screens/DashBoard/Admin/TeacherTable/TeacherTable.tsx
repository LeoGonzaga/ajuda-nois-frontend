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
      name: 'Bryan Fortunato',
      email: 'azuosbryan@unifei.edu.br',
      fields: 'Matemática, Linguagens',
      subjects: 'Matemática, Inglês',
    },
    {
      name: 'Ana Grego',
      email: 'camilo25@deaguiar.net.br',
      fields: 'Humanas',
      subjects: 'História',
    },
    {
      name: 'Samuel Lutero',
      email: 'christian97@galvao.net',
      fields: 'Linguagens',
      subjects: 'Espanhol',
    },
    {
      name: "Luciana D'ávila",
      email: 'vfeliciano@rezende.net',
      fields: 'Natureza, Humanas',
      subjects: 'Física, Geografia',
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
