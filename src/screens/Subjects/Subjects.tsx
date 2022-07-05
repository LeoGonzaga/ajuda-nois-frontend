import React from 'react';
import { AiOutlineCalculator } from 'react-icons/ai';
import { BsChatLeftQuote } from 'react-icons/bs';
import { GiGreekTemple } from 'react-icons/gi';
import { IoTelescopeOutline } from 'react-icons/io5';

import Title from '@components/Title';

import Card from './components/Card';
import SubjectItem from './components/SubjectItem';
import {
  Container,
  Grid,
  SubjectContent,
  SubjectItemButton,
  Table,
} from './styles';
import useSubject from './useSubject';

export const Subjects = (): JSX.Element => {
  const {
    data,
    allSubjects,
    activeArea,
    handleToggleToShowContent,
    handleChangeActiveSubject,
    activeSubjectName,
    loading,
  } = useSubject();

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
            active={'mathematics' == activeArea}
          />
          <Card
            onClick={() => handleToggleToShowContent('human_sciences')}
            title={'Ciencias Humanas'}
            color="#FBBC05"
            icon={<GiGreekTemple size={30} />}
            active={'human_sciences' == activeArea}
          />
          <Card
            onClick={() => handleToggleToShowContent('natural_sciences')}
            title={'Ciências da natureza'}
            color="#00BF20"
            icon={<IoTelescopeOutline size={30} />}
            active={'natural_sciences' == activeArea}
          />
          <Card
            onClick={() => handleToggleToShowContent('languages')}
            title={'Linguagens e códigos'}
            color="#CA1E3C"
            icon={<BsChatLeftQuote size={30} />}
            active={'languages' == activeArea}
          />
        </div>
        {activeArea && (
          <SubjectContent>
            {allSubjects?.map((subject: any, index) => {
              if (subject.area === activeArea) {
                return (
                  <SubjectItemButton
                    active={subject.name === activeSubjectName}
                    key={index}
                    onClick={() =>
                      handleChangeActiveSubject(subject?._id, subject.name)
                    }
                  >
                    {subject.name}
                  </SubjectItemButton>
                );
              }
            })}

            <Table>
              {data?.length > 0 &&
                data?.map((topic: any, index) => (
                  <SubjectItem
                    topic={topic.name}
                    topic_id={topic?._id}
                    check={false}
                    key={index}
                    loading={loading}
                  />
                ))}
            </Table>
          </SubjectContent>
        )}
      </Grid>
    </Container>
  );
};
