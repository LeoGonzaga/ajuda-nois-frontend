import React, { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';

import Title from '@components/Title';

import Card from './components/Card';
import NewCardModal from './components/NewCardModal';
import Sidebar from './components/Sidebar';
import Weekday from './components/Weekday';
import {
  Container,
  VerticalContainer,
  TitleWrapper,
  CardsWrapper,
  HorizontalContainer,
} from './styles';

type CardProps = {
  status: string;
  startTime: string;
  endTime: string;
  subject: string;
  topic: string;
  text?: string;
};

export const StudyPlan = (): JSX.Element => {
  const [isNewCardModalOpen, setIsNewCardModalOpen] = useState(false);
  const [cards, setCards] = useState<CardProps[]>([
    {
      status: 'idle',
      startTime: '10:00',
      endTime: '15:30',
      subject: 'Matemática',
      topic: 'Trigonometria',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat ornare tincidunt. Ut eleifend eros ac mauris sagittis sollicitudin. Nam varius mi arcu. Nulla placerat erat quam, vitae ultricies nunc auctor et. Nam maximus non lorem et euismod.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat ornare tincidunt. Ut eleifend eros ac mauris sagittis sollicitudin. Nam varius mi arcu. Nulla placerat erat quam, vitae ultricies nunc auctor et. Nam maximus non lorem et euismod.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat ornare tincidunt. Ut eleifend eros ac mauris sagittis sollicitudin. Nam varius mi arcu. Nulla placerat erat quam, vitae ultricies nunc auctor et. Nam maximus non lorem et euismod.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat ornare tincidunt. Ut eleifend eros ac mauris sagittis sollicitudin. Nam varius mi arcu. Nulla placerat erat quam, vitae ultricies nunc auctor et. Nam maximus non lorem et euismod.',
    },
    {
      status: 'failed',
      startTime: '9:00',
      endTime: '10:00',
      subject: 'Química',
      topic: 'Inorgânica',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat ornare tincidunt. Ut eleifend eros ac mauris sagittis sollicitudin. Nam varius mi arcu. Nulla placerat erat quam, vitae ultricies nunc auctor et. Nam maximus non lorem et euismod.',
    },
    {
      status: 'idle',
      startTime: '6:00',
      endTime: '8:30',
      subject: 'Filosofia',
      topic: 'Existencialismo',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat ornare tincidunt. Ut eleifend eros ac mauris sagittis sollicitudin. Nam varius mi arcu. Nulla placerat erat quam, vitae ultricies nunc auctor et. Nam maximus non lorem et euismod.',
    },
  ]);

  function handleOpenNewCardModal() {
    setIsNewCardModalOpen(true);
  }

  function handleCloseNewCardModal() {
    setIsNewCardModalOpen(false);
  }

  const handleNewCard = (data: CardProps) => {
    setCards((prevState) => [...prevState, data]);
  };

  return (
    <Container>
      <VerticalContainer>
        <TitleWrapper>
          <Title
            text="Cronograma de"
            contrast="estudos"
            subText="Selecione um dia para filtrar"
          />
          <button onClick={handleOpenNewCardModal}>
            <BsPlusLg /> Criar novo plano
          </button>
        </TitleWrapper>
        <HorizontalContainer>
          <Weekday />
          <CardsWrapper>
            {cards.map((card, index) => (
              <Card
                key={index}
                status={card.status}
                startTime={card.startTime}
                endTime={card.endTime}
                subject={card.subject}
                topic={card.topic}
                text={card.text}
              />
            ))}
          </CardsWrapper>
        </HorizontalContainer>
      </VerticalContainer>
      <Sidebar />

      <NewCardModal
        isOpen={isNewCardModalOpen}
        onRequestClose={handleCloseNewCardModal}
        onHandleNewCard={handleNewCard}
      />
    </Container>
  );
};
