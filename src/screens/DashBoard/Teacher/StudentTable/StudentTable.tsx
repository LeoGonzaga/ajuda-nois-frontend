/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Spacing from '@components/Spacing';
import { RootState } from 'src/config/store';

import Expandable from '../../components/Expandable';
import { ColorTD, Container, Content } from './styles';

type Props = {
  size: number;
  name: string;
  lowRate: number;
  mediumRate: number;
  students: any;
  id: string;
};

export const StudentTable = ({
  size,
  name,
  students,
  id,
}: Props): JSX.Element => {
  const index = useSelector((state: RootState) => state.admin.index);
  const quantity = useSelector((state: RootState) => state.admin.quantity);

  const [header, setHeader] = useState<any>([]);
  const [users, setUsers] = useState<any>([]);

  const uniq = (a: any) => {
    return Array.from(new Set(a));
  };

  const handleHeader = () => {
    const header = students?.map((elem: any) => elem.mock_exams);
    const mapToArray = header?.flat(Infinity).map((elem: any) => elem.date);
    const unique = uniq(mapToArray);
    setHeader(unique);
    setUsers(header);
  };

  useEffect(() => {
    if (students?.length > 0) {
      handleHeader();
    }
  }, []);

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
                {header?.map((elem: any, i: number) => {
                  return (
                    <th key={i}>
                      <div>
                        Acertos <br /> {elem?.split('-')?.reverse().join('-')}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {students?.map((elem: any, i: number) => {
                return (
                  <tr key={i}>
                    <td>{elem.username}</td>

                    {elem.mock_exams?.map((exam: any) => {
                      const value = exam.correct_answers_per_subject;
                      const filter = value?.filter(
                        (item: any) => item.subject_id === id
                      )[0];

                      return <td>{filter?.correct_answers}</td>;
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
