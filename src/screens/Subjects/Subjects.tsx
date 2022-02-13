import React, { useState } from 'react';
import { AiOutlineCalculator } from 'react-icons/ai';
import { BsChatLeftQuote, BsFillCheckCircleFill } from 'react-icons/bs';
import { GiGreekTemple } from 'react-icons/gi';
import { IoTelescopeOutline } from 'react-icons/io5';

import Text from '@components/Text';
import Title from '@components/Title';
import { COLORS } from '@themes/colors';

import Card from './components/Card';
import { Container, Grid, SubjectContent, Table, TableItem } from './styles';

export const Subjects = (): JSX.Element => {
  const [activeSubject, setActiveSubject] = useState<string>('Matemática');

  const handleToggleToShowContent = (value: string) => {
    setActiveSubject(value);
  };

  return (
    <Container>
      <Title text="Escolher" contrast="matéria" />
      <Grid>
        <div>
          <Card
            onClick={() => handleToggleToShowContent('Matemática')}
            title={'Matemática e suas Tecnologias'}
            color="#00c86f"
            icon={<AiOutlineCalculator />}
            active={'Matemática' == activeSubject}
          />
          <Card
            onClick={() => handleToggleToShowContent('Humanas')}
            title={'Ciencias Humanas'}
            color="#6bd1ff"
            icon={<GiGreekTemple />}
            active={'Humanas' == activeSubject}
          />
          <Card
            onClick={() => handleToggleToShowContent('Natureza')}
            title={'Ciências da natureza'}
            color="#dc6ebe"
            icon={<IoTelescopeOutline />}
            active={'Natureza' == activeSubject}
          />
          <Card
            onClick={() => handleToggleToShowContent('Linguagens')}
            title={'Linguagens e códigos'}
            color="#ff8c2a"
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
              <TableItem>
                <Text>Equação do 1º Grau</Text>

                <BsFillCheckCircleFill color={COLORS.SECONDARY} />
              </TableItem>
              <TableItem>
                <Text>Equação do 1º Grau</Text>
              </TableItem>
              <TableItem>
                <Text>Equação do 1º Grau</Text>
              </TableItem>
              <TableItem>
                <Text>Equação do 1º Grau</Text>
              </TableItem>
              <TableItem>
                <Text>Equação do 1º Grau</Text>
              </TableItem>
              <TableItem>
                <Text>Equação do 1º Grau</Text>
              </TableItem>
              <TableItem>
                <Text>Equação do 1º Grau</Text>
              </TableItem>
              <TableItem>
                <Text>Equação do 1º Grau</Text>
              </TableItem>
              <TableItem>
                <Text>Equação do 1º Grau</Text>
              </TableItem>
              <TableItem>
                <Text>Equação do 1º Grau</Text>
              </TableItem>
              <TableItem>
                <Text>Equação do 1º Grau</Text>
              </TableItem>
              <TableItem>
                <Text>Equação do 1º Grau</Text>
              </TableItem>
              <TableItem>
                <Text>Equação do 1º Grau</Text>
              </TableItem>
              <TableItem>
                <Text>Equação do 1º Grau</Text>
              </TableItem>
              <TableItem>
                <Text>Equação do 1º Grau</Text>
              </TableItem>
              <TableItem>
                <Text>Equação do 1º Grau</Text>
              </TableItem>
              <TableItem>
                <Text>Equação do 1º Grau</Text>
              </TableItem>
              <TableItem>
                <Text>Equação do 1º Grau</Text>
              </TableItem>
              <TableItem>
                <Text>Equação do 1º Grau</Text>
              </TableItem>
              <TableItem>
                <Text>Equação do 1º Grau</Text>
              </TableItem>
              <TableItem>
                <Text>Equação do 1º Grau</Text>
              </TableItem>
              <TableItem>
                <Text>Equação do 1º Grau</Text>
              </TableItem>
              <TableItem>
                <Text>Equação do 1º Grau</Text>
              </TableItem>
              <TableItem>
                <Text>Equação do 1º Grau</Text>
              </TableItem>
            </Table>
          </SubjectContent>
        )}
      </Grid>
    </Container>
  );
};
