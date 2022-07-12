import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Spacing from '@components/Spacing';
import { RootState } from 'src/config/store';

import Expandable from '../../components/Expandable';
import { Container, Content } from './styles';

type Props = {
  size: number;
  data: any;
};

export const StudentTable = ({ size, data }: Props): JSX.Element => {
  const students = useSelector((state: RootState) => state.admin.student);
  const [dataSorted, setDataSorted] = useState([]);

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
              {students?.length > 0 &&
                students?.map(
                  ({ username, email, mock_exams }: any, index: number) => {
                    return (
                      <tr key={index}>
                        <td>{username}</td>
                        <td>{email}</td>
                        <td>{mock_exams[0]?.human_sciences_score || 0} /45</td>
                        <td>
                          {mock_exams[0]?.natural_sciences_score || 0} /45
                        </td>
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
