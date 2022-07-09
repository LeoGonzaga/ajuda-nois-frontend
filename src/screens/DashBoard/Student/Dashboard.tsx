import React, { useEffect, useState } from 'react';

import ResultsPomodoro from '../components/ResultsPomodoro';
import StudentChart from '../components/StudentChart';
import SubjectContent from '../components/SubjectContent';
import Timeline from '../components/Timeline';
import { Column, Container, Row } from './styles';

type Props = {
  data: any;
};

export const Dashboard = ({ data }: Props): JSX.Element => {
  const [areas, setAreas] = useState({
    natural: 0,
    math: 0,
    human: 0,
    language: 0,
  });

  const calcPorcentageByArea = (current: number, total: number) => {
    return (current / total) * 100;
  };

  console.log(data.topicsGraph);
  const handleFormatDataToTopics = () => {
    const topicsByArea = data?.topicsGraph;
    const human = calcPorcentageByArea(
      topicsByArea?.human_completed,
      topicsByArea?.human_total
    );

    const language = calcPorcentageByArea(
      topicsByArea?.languages_completed,
      topicsByArea?.languages_total
    );

    const math = calcPorcentageByArea(
      topicsByArea?.maths_completed,
      topicsByArea?.maths_total
    );

    const natural = calcPorcentageByArea(
      topicsByArea?.natural_completed,
      topicsByArea?.natural_total
    );
    setAreas({
      human: human,
      language: language,
      math: math,
      natural: natural,
    });
  };

  useEffect(() => {
    handleFormatDataToTopics();
  }, [data]);

  return (
    <Container>
      <Row>
        <Column>
          <SubjectContent value={areas} />
        </Column>
        <StudentChart />
      </Row>
      <Row>
        <ResultsPomodoro />
        <Timeline />
      </Row>
    </Container>
  );
};
