import React, { useState } from 'react';
import { ImParagraphLeft } from 'react-icons/im';

import SecondaryButton from '@components/Buttons/SecondaryButton';
import Spacing from '@components/Spacing';
import Title from '@components/Title';

import ConfigurationsModal from './ConfigurationsModal';
import { ConfigButton, Container, Controls } from './styles';
import Subject from './Subject';

type ConfigProps = {
  ratesLow: number;
  ratesMedium: number;
};

export const Dashboard: React.FC = () => {
  const [isConfigurationsOpen, setIsConfigurationsOpen] = useState(false);
  const [lowRate, setLowRate] = useState(25);
  const [mediumRate, setMediumRate] = useState(60);
  const data = [
    {
      name: 'Geografia',
      topics: ['Planetas', 'Minérios', 'Bacias Hidrográficas'],
      quizRates: [78, 55, 83, 12],
    },
    {
      name: 'Matemática',
      topics: [
        'Equações 1º Grau',
        'Equações 2º Grau',
        'Inequações',
        'Geometria',
        'Funções',
        'Juros',
        'Operações Complexas',
      ],
      quizRates: [89, 52, 23, 42, 88, 97, 19],
    },
    {
      name: 'Inglês',
      topics: [],
      quizRates: [],
    },
  ];

  function handleOpenConfigurations() {
    setIsConfigurationsOpen(true);
  }

  function handleCloseConfigurations() {
    setIsConfigurationsOpen(false);
  }

  const handleConfigurations = ({ ratesLow, ratesMedium }: ConfigProps) => {
    setLowRate(ratesLow);
    setMediumRate(ratesMedium);
  };

  return (
    <Container>
      <Controls>
        <Title text="Dashboard" contrast="" subText="" />
        <span>
          <ConfigButton onClick={handleOpenConfigurations}>
            <ImParagraphLeft /> Medidores
          </ConfigButton>
          <SecondaryButton>Configurações</SecondaryButton>
        </span>
      </Controls>
      <Spacing vertical={5} />
      {data?.map(({ name, topics, quizRates }, index) => {
        return (
          <>
            <Subject
              key={index}
              name={name}
              topics={topics}
              lowRate={lowRate}
              mediumRate={mediumRate}
              quizRates={quizRates}
            />
          </>
        );
      })}

      <ConfigurationsModal
        isOpen={isConfigurationsOpen}
        onRequestClose={handleCloseConfigurations}
        onHandleConfigurations={handleConfigurations}
      />
    </Container>
  );
};
