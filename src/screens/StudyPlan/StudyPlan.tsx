import React, { useEffect, useState } from 'react';
import { BsCalendar4, BsPlusLg } from 'react-icons/bs';

import Flex from '@components/Flex';
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
  Icon,
  Row,
  IconBig,
} from './styles';
import { COLORS } from '@themes/colors';
import SidebarModal from './components/SidebarModal';
import Spacing from '@components/Spacing';

type CardProps = {
  status: string;
  startTime: string;
  endTime: string;
  subject: string;
  topic: string;
  text?: string;
};

export const StudyPlan = (): JSX.Element => {
  const [openCalendar, setOpenCalendar] = useState(false);
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
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1329;

  function handleOpenCalendar() {
    setOpenCalendar(true);
  }

  function handleCloseCalendar() {
    setOpenCalendar(false);
  }

  function handleOpenNewCardModal() {
    setIsNewCardModalOpen(true);
  }

  function handleCloseNewCardModal() {
    setIsNewCardModalOpen(false);
  }

  const handleNewCard = (data: CardProps) => {
    setCards((prevState) => [...prevState, data]);
  };

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  return (
    <Container>
      <VerticalContainer>
        <TitleWrapper>
          <Flex direction="row">
            <Title
              text="Cronograma de"
              contrast="estudos"
              subText="Selecione um dia para filtrar"
            />
            <Icon onClick={() => handleOpenCalendar()}>
              <BsCalendar4 size={26} color={COLORS.SECONDARY} />
            </Icon>
          </Flex>
          <button onClick={handleOpenNewCardModal}>
            <BsPlusLg /> Criar novo plano
          </button>
        </TitleWrapper>
        <HorizontalContainer>
          <Row>
            <Weekday />
            <IconBig onClick={() => handleOpenCalendar()}>
              <BsCalendar4 size={24} color={COLORS.SECONDARY} /> Calendário
            </IconBig>
          </Row>
          <Spacing horizontal={10} />
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
      {width <= breakpoint ? (
        <SidebarModal
          open={openCalendar}
          onRequestClose={handleCloseCalendar}
        />
      ) : (
        <Sidebar />
      )}

      <NewCardModal
        isOpen={isNewCardModalOpen}
        onRequestClose={handleCloseNewCardModal}
        onHandleNewCard={handleNewCard}
      />
    </Container>
  );
};
