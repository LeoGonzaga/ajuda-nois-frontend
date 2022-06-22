import React, { useState } from 'react';
import { AiOutlineCalculator } from 'react-icons/ai';
import { BsChatLeftQuote } from 'react-icons/bs';
import { GiGreekTemple } from 'react-icons/gi';
import { IoTelescopeOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

import Text from '@components/Text';
import Title from '@components/Title';
import { add } from 'src/config/actions/subjects';

import SelectSubject from '../Tips/components/SelectSubject';
import Card from './components/Card';
import SubjectItem from './components/SubjectItem';
import { Container, Grid, SubjectContent, Table } from './styles';

export const Subjects = (): JSX.Element => {
  const dispatch = useDispatch();

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
            onClick={() => handleToggleToShowContent('Matemática')}
            title={'Matemática'}
            color="#6F52ED"
            icon={<AiOutlineCalculator size={30} />}
            active={'Matemática' == activeSubject}
          />
          <Card
            onClick={() => handleToggleToShowContent('Humanas')}
            title={'Ciencias Humanas'}
            color="#FBBC05"
            icon={<GiGreekTemple size={30} />}
            active={'Humanas' == activeSubject}
          />
          <Card
            onClick={() => handleToggleToShowContent('Natureza')}
            title={'Ciências da natureza'}
            color="#00BF20"
            icon={<IoTelescopeOutline size={30} />}
            active={'Natureza' == activeSubject}
          />
          <Card
            onClick={() => handleToggleToShowContent('Linguagens')}
            title={'Linguagens e códigos'}
            color="#CA1E3C"
            icon={<BsChatLeftQuote size={30} />}
            active={'Linguagens' == activeSubject}
          />
        </div>
        {activeSubject && (
          <SubjectContent>
            <SelectSubject active={true} />
            <Table>
              <SubjectItem topic="Revolução industrial" check />
              <SubjectItem topic="Revolução Francesa" />
            </Table>
          </SubjectContent>
        )}
      </Grid>
    </Container>
  );
};
