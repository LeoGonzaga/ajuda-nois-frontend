import React, { useState } from 'react';
import { AiOutlineCalculator } from 'react-icons/ai';
import { BsChatLeftQuote } from 'react-icons/bs';
import { GiGreekTemple } from 'react-icons/gi';
import { IoTelescopeOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

import Title from '@components/Title';
import { add } from 'src/config/actions/subjects';

import SelectSubject from '../Tips/components/SelectSubject';
import Card from './components/Card';
import SubjectItem from './components/SubjectItem';
import { Container, Grid, SubjectContent, Table } from './styles';
import useSubject from './useSubject';

export const Subjects = (): JSX.Element => {
  const dispatch = useDispatch();
  const { data, allSubjects } = useSubject();

  const [activeSubject, setActiveSubject] = useState<string>('Matemática');

  const handleToggleToShowContent = (value: string) => {
    setActiveSubject(value);
    dispatch(add(value));
  };

  return (
    <Container>
      <Title text="Escolher" contrast="matéria" />
      <Grid>
        <div>
          <Card
            onClick={() => handleToggleToShowContent('mathematics')}
            title={'Matemática'}
            color="#6F52ED"
            icon={<AiOutlineCalculator size={30} />}
            active={'mathematics' == activeSubject}
          />
          <Card
            onClick={() => handleToggleToShowContent('human_sciences')}
            title={'Ciencias Humanas'}
            color="#FBBC05"
            icon={<GiGreekTemple size={30} />}
            active={'human_sciences' == activeSubject}
          />
          <Card
            onClick={() => handleToggleToShowContent('natural_sciences')}
            title={'Ciências da natureza'}
            color="#00BF20"
            icon={<IoTelescopeOutline size={30} />}
            active={'natural_sciences' == activeSubject}
          />
          <Card
            onClick={() => handleToggleToShowContent('languages')}
            title={'Linguagens e códigos'}
            color="#CA1E3C"
            icon={<BsChatLeftQuote size={30} />}
            active={'languages' == activeSubject}
          />
        </div>
        {activeSubject && (
          <SubjectContent>
            {allSubjects?.map((subject: any, index) => {
              if (subject.area === activeSubject) {
                return <button key={index}>{subject.name}</button>;
              }
            })}

            <Table>
              {data?.length > 0 &&
                data?.map((topic: any, index) => (
                  <SubjectItem
                    topic={topic.name}
                    topic_id={topic?._id}
                    check
                    key={index}
                  />
                ))}
            </Table>
          </SubjectContent>
        )}
      </Grid>
    </Container>
  );
};
