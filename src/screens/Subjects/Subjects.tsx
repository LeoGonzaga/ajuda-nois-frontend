import React, { useState } from 'react';
import { AiOutlineCalculator } from 'react-icons/ai';
import { BsChatLeftQuote } from 'react-icons/bs';
import { GiGreekTemple } from 'react-icons/gi';
import { IoTelescopeOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';

import Text from '@components/Text';
import Title from '@components/Title';
import { add } from 'src/config/actions/subjects';
import { RootState } from 'src/config/store';

import Card from './components/Card';
import SubjectItem from './components/SubjectItem';
import { Container, Grid, SubjectContent, Table } from './styles';

export const Subjects = (): JSX.Element => {
  const dispatch = useDispatch();
  const selectedGenres = useSelector((state: RootState) => state.subjects);

  const [activeSubject, setActiveSubject] = useState<string>('Matemática');

  const handleToggleToShowContent = (value: string) => {
    setActiveSubject(value);
    dispatch(add(value));
  };

  console.log(selectedGenres);

  return (
    <Container>
      <Title text="Escolher" contrast="matéria" />
      <Grid>
        <div>
          <Card
            onClick={() => handleToggleToShowContent('Matemática')}
            title={'Matemática e suas Tecnologias'}
            color="#6F52ED"
            icon={<AiOutlineCalculator />}
            active={'Matemática' == activeSubject}
          />
          <Card
            onClick={() => handleToggleToShowContent('Humanas')}
            title={'Ciencias Humanas'}
            color="#FBBC05"
            icon={<GiGreekTemple />}
            active={'Humanas' == activeSubject}
          />
          <Card
            onClick={() => handleToggleToShowContent('Natureza')}
            title={'Ciências da natureza'}
            color="#00BF20"
            icon={<IoTelescopeOutline />}
            active={'Natureza' == activeSubject}
          />
          <Card
            onClick={() => handleToggleToShowContent('Linguagens')}
            title={'Linguagens e códigos'}
            color="#CA1E3C"
            icon={<BsChatLeftQuote />}
            active={'Linguagens' == activeSubject}
          />
        </div>
        {activeSubject && (
          <SubjectContent>
            <Text bold size={30}>
              {activeSubject}
            </Text>
            <Table>
              <SubjectItem />
              <SubjectItem />
            </Table>
          </SubjectContent>
        )}
      </Grid>
    </Container>
  );
};
