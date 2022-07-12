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

  const uniq = (a: any) => {
    return Array.from(new Set(a));
  };

  const handleHeader = () => {
    const header = students?.map((elem: any) => elem.mock_exams).flat(Infinity);
    const mapToArray = header?.map((elem: any) => elem.date);

    const unique = uniq(mapToArray);
    console.log(unique?.reverse());
    const rev = unique?.reverse();

    setHeader(unique);
  };

  useEffect(() => {
    if (students?.length > 0) {
      handleHeader();
    }
  }, []);

  // if (elem.mock_exams[inn]?.date == head) {
  //     console.log('aqui', elem.mock_exams[inn]);
  //     const subject = value?.map((el: any) => el.subject_id);
  //     if (subject?.includes(id)) {
  //       const indexOf = subject.indexOf(id);
  //       return <td>{value[indexOf]?.correct_answers}</td>;
  //     } else {
  //       return <td>Não fez a prova</td>;
  //     }
  //   } else {
  //     return <td>Não fez a prova</td>;
  //   }
  // })}

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

                    {header?.map((_: any, inn: number) => {
                      const value =
                        elem.mock_exams[inn]?.correct_answers_per_subject;
                      const subject = value?.map((el: any) => el.subject_id);

                      if (subject?.includes(id)) {
                        const indexOf = subject.indexOf(id);
                        return <td>{value[indexOf]?.correct_answers}</td>;
                      } else {
                        return <td>Não fez a prova</td>;
                      }
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
