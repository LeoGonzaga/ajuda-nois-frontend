import React from 'react';

import Spacing from '@components/Spacing';

import Expandable from '../../components/Expandable';
import { Container, Content } from './styles';

type Props = {
  size: number;
};

export const TeacherTable: React.FC<Props> = ({ size }: Props) => {
  const data = [
    {
      name: 'Caio Rolando da Rocha',
      email: 'crrocha@hotmail.com',
      fields: 'Humanas',
      subjects: 'Geografia, História',
    },
    {
      name: 'Kagaro Kamiyamoto',
      email: 'kakami@yahoo.com.jp',
      fields: 'Linguagens',
      subjects: 'Inglês',
    },
    {
      name: 'Jana Ina',
      email: 'janaina@gmail.com',
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
