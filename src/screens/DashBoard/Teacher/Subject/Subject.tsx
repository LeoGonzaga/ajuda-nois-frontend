import React, { useState } from 'react';
import { IoWarning } from 'react-icons/io5';
import { MdError } from 'react-icons/md';

import Spacing from '@components/Spacing';
import { COLORS } from '@themes/colors';

import Expandable from '../../components/Expandable';
import MediumCard from '../../components/MediumCard';
import ResultsTest from '../../components/ResultsTest';
import TopicContent from '../../components/TopicContent';
import { Column, Container, Content, Row, Wrapper } from './styles';

type Props = {
  name: string;
  topics: Array<string>;
  quizRates: Array<number>;
  children?: React.ReactNode;
};

export const Subject: React.FC<Props> = ({
  name,
  topics,
  quizRates,
  children,
}: Props) => {
  const [lowRate, setLowRate] = useState(25);
  const [mediumRate, setMediumRate] = useState(60);

  const data = [
    {
      name: 'Alan Bedoura de Pinto',
      email: 'l337g4m3r@hotmail.com',
      humanScore: '27/45',
      natureScore: '32/45',
      languageScore: '35/45',
      mathScore: '33/45',
    },
    {
      name: 'Botelho Kunavara',
      email: 'ex.ample@yahoo.com.br',
      humanScore: '40/45',
      natureScore: '40/45',
      languageScore: '40/45',
      mathScore: '40/45',
    },
    {
      name: 'Yasmin Asbolla',
      email: 'ligma@gmail.com',
      humanScore: '15/45',
      natureScore: '25/45',
      languageScore: '35/45',
      mathScore: '45/45',
    },
    {
      name: 'Alan Bedoura de Pinto',
      email: 'l337g4m3r@hotmail.com',
      humanScore: '27/45',
      natureScore: '32/45',
      languageScore: '35/45',
      mathScore: '33/45',
    },
    {
      name: 'Botelho Kunavara',
      email: 'ex.ample@yahoo.com.br',
      humanScore: '40/45',
      natureScore: '40/45',
      languageScore: '40/45',
      mathScore: '40/45',
    },
    {
      name: 'Yasmin Asbolla',
      email: 'ligma@gmail.com',
      humanScore: '15/45',
      natureScore: '25/45',
      languageScore: '35/45',
      mathScore: '45/45',
    },
    {
      name: 'Alan Bedoura de Pinto',
      email: 'l337g4m3r@hotmail.com',
      humanScore: '27/45',
      natureScore: '32/45',
      languageScore: '35/45',
      mathScore: '33/45',
    },
    {
      name: 'Botelho Kunavara',
      email: 'ex.ample@yahoo.com.br',
      humanScore: '40/45',
      natureScore: '40/45',
      languageScore: '40/45',
      mathScore: '40/45',
    },
    {
      name: 'Yasmin Asbolla',
      email: 'ligma@gmail.com',
      humanScore: '15/45',
      natureScore: '25/45',
      languageScore: '35/45',
      mathScore: '45/45',
    },
  ];

  return (
    <Container>
      <Expandable title={name} size={10} type="teacher">
        <Content>
          <Column>
            <Row>
              <MediumCard
                color={COLORS.RED}
                indicator={25}
                value={3}
                icon={<MdError />}
              />
              <Spacing horizontal={5} />
              <MediumCard
                color={COLORS.YELLOW}
                indicator={60}
                value={10}
                icon={<IoWarning />}
              />
            </Row>
            <TopicContent
              topics={topics}
              quizRates={quizRates}
              lowRate={lowRate}
              mediumRate={mediumRate}
            />
          </Column>
          <Wrapper>
            <ResultsTest type="vertical" />
          </Wrapper>
        </Content>
      </Expandable>
    </Container>
  );
};
