import React, { useEffect, useState } from 'react';
import { ImParagraphLeft } from 'react-icons/im';

import SecondaryButton from '@components/Buttons/SecondaryButton';
import Spacing from '@components/Spacing';
import Title from '@components/Title';
import Router from 'next/router';
import { ROUTES } from 'src/routes/routes';

import ConfigurationsModal from './ConfigurationsModal';
import { ConfigButton, Container, Controls } from './styles';
import Subject from './Subject';

export const Dashboard = ({ data }: any): JSX.Element => {
  const [isConfigurationsOpen, setIsConfigurationsOpen] = useState(false);
  const [lowRate, setLowRate] = useState(25);
  const [mediumRate, setMediumRate] = useState(60);

  const studentSize = 10;

  function handleOpenConfigurations() {
    setIsConfigurationsOpen(true);
  }

  function handleCloseConfigurations() {
    setIsConfigurationsOpen(false);
  }

  const handleLowRate = (ratesLow: number) => {
    setLowRate(ratesLow);
  };

  const handleMediumRate = (ratesMedium: number) => {
    setMediumRate(ratesMedium);
  };

  const handleRedirectToPanel = () => {
    Router.push(ROUTES.PANEL);
  };

  return (
    <Container>
      <Controls>
        <Title text="Dashboard" contrast="" subText="" />
        <span>
          {/* <ConfigButton onClick={handleOpenConfigurations}>
            <ImParagraphLeft /> Medidores
          </ConfigButton> */}
          <SecondaryButton onClick={handleRedirectToPanel}>
            Painel de controle
          </SecondaryButton>
        </span>
      </Controls>

      <Spacing vertical={5} />
      {data?.subjects?.map(({ name, _id }: any, index: number) => {
        return (
          <>
            <Subject
              id={_id}
              key={index}
              name={name}
              topics={[]}
              lowRate={lowRate}
              mediumRate={mediumRate}
              quizRates={[]}
              studentSize={studentSize}
              exams={data?.mockExamGraph}
              students={data?.students}
            />
          </>
        );
      })}

      <ConfigurationsModal
        isOpen={isConfigurationsOpen}
        lowRate={lowRate}
        mediumRate={mediumRate}
        onRequestClose={handleCloseConfigurations}
        onHandleLowRate={handleLowRate}
        onHandleMediumRate={handleMediumRate}
      />
    </Container>
  );
};
