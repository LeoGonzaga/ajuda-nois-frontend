import React from 'react';
import { AiOutlineCalculator } from 'react-icons/ai';
import { BsChatLeftQuote } from 'react-icons/bs';
import { GiGreekTemple } from 'react-icons/gi';
import { IoTelescopeOutline } from 'react-icons/io5';

import LoadingTable from '@components/LoadingTable';
import Title from '@components/Title';

import Card from './components/Card';
import SubjectItem from './components/SubjectItem';
import {
  Area,
  AreaSubject,
  Container,
  Content,
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
    permissions,
    subjectsByTeacher,
    role,
  } = useSubject();

  return (
    <Container>
      <Title text="Escolher" contrast="matéria" />
      <Content>
        <Grid>
          <Area>
            {permissions?.mathematics && (
              <Card
                onClick={() => handleToggleToShowContent('mathematics')}
                title={'Matemática'}
                color="#6F52ED"
                icon={<AiOutlineCalculator size={30} />}
                active={'mathematics' == activeArea}
              />
            )}

            {permissions?.human_sciences && (
              <Card
                onClick={() => handleToggleToShowContent('human_sciences')}
                title={'Ciencias Humanas'}
                color="#FBBC05"
                icon={<GiGreekTemple size={30} />}
                active={'human_sciences' == activeArea}
              />
            )}

            {permissions?.natural_sciences && (
              <Card
                onClick={() => handleToggleToShowContent('natural_sciences')}
                title={'Ciências da natureza'}
                color="#00BF20"
                icon={<IoTelescopeOutline size={30} />}
                active={'natural_sciences' == activeArea}
              />
            )}

            {permissions?.languages && (
              <Card
                onClick={() => handleToggleToShowContent('languages')}
                title={'Linguagens e códigos'}
                color="#CA1E3C"
                icon={<BsChatLeftQuote size={30} />}
                active={'languages' == activeArea}
              />
            )}
          </Area>
          {activeArea && (
            <SubjectContent>
              <AreaSubject>
                {allSubjects?.map((subject: any, index) => {
                  if (
                    subject?.area === activeArea &&
                    subjectsByTeacher.includes(subject?.name)
                  ) {
                    return (
                      <SubjectItemButton
                        active={subject?.name === activeSubjectName}
                        key={index}
                        onClick={() =>
                          handleChangeActiveSubject(subject?._id, subject.name)
                        }
                      >
                        {subject.name}
                      </SubjectItemButton>
                    );
                  }
                  if (subject?.area === activeArea && role === 'student') {
                    return (
                      <SubjectItemButton
                        active={subject?.name === activeSubjectName}
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
              </AreaSubject>

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

                {data?.length === 0 && loading && <LoadingTable />}
              </Table>
            </SubjectContent>
          )}
        </Grid>
      </Content>
    </Container>
  );
};
