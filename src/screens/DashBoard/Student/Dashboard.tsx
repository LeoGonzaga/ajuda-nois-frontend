/* eslint-disable react-hooks/exhaustive-deps */
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
  const [pomodoros, setPomodoros] = useState([]);
  const [examPerArea, setExamPerArea] = useState([]);
  const [examInfo, setExamInfo] = useState([]);

  const calcPorcentageByArea = (current: number, total: number) => {
    return (current / total) * 100;
  };

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
      human: human?.toFixed(2),
      language: language?.toFixed(2),
      math: math?.toFixed(2),
      natural: natural?.toFixed(2),
    });
  };

  const getInfosByStudent = () => {
    if (data?.student) {
      const value = data?.student[0];
      const allPomodoros = value?.pomodoros;
      const exams = value?.mock_exams;
      const infos = value?.mock_exams_info;

      setPomodoros(allPomodoros);
      setExamPerArea(exams);
      setExamInfo(infos);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await handleFormatDataToTopics();
      await getInfosByStudent();
    };

    fetchData();
  }, [data]);

  return (
    <Container>
      <Row>
        <Column>
          <SubjectContent value={areas} />
        </Column>
        <StudentChart data={examPerArea} infos={examInfo} />
      </Row>
      <Row>
        <ResultsPomodoro data={pomodoros} />
        <Timeline />
      </Row>
    </Container>
  );
};
