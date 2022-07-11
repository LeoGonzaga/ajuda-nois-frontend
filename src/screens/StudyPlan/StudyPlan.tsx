import React, { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { useSelector } from 'react-redux';

import Title from '@components/Title';
import { Options, Response, requestAPI } from '@services/index';
import { checkError } from '@utils/functions';
import moment from 'moment';
import { RootState } from 'src/config/store';

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
import useStudyPlan from './useStudyPlan';

type CardProps = {
  status: string;
  startTime: string;
  endTime: string;
  subject: string;
  topic: string;
  text?: string;
};

export const StudyPlan = (): JSX.Element => {
  const selectedDays = useSelector((state: RootState) => state.calendar);
  const { subjects, getAllPlanByDays, cards } = useStudyPlan();
  const [isNewCardModalOpen, setIsNewCardModalOpen] = useState(false);

  console.log(cards);

  function handleOpenNewCardModal() {
    setIsNewCardModalOpen(true);
  }

  function handleCloseNewCardModal() {
    setIsNewCardModalOpen(false);
  }

  const handleNewCard = async (data: CardProps) => {
    const token = localStorage.getItem('token');
    console.log(data, selectedDays);

    const selectedDate = selectedDays?.selectedDays[0];
    const format = moment(selectedDate).format('YYYY-MM-DD');
    console.log(format);

    const payload: Options = {
      method: 'POST',
      url: '/createStudyPlan',
      data: {
        studies: [
          {
            subject_id: data?.subject,
            topic_id: data?.topic,
            begin: data?.startTime,
            end: data?.endTime,
            description: data?.text,
          },
        ],
        date: format,
      },
      headers: { Authorization: `Bearer ${token}` },
    };
    const { response }: Response = await requestAPI(payload);
    const error = checkError(response.status);
    if (error) {
      return;
    }
    getAllPlanByDays();
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
        subjects={subjects}
      />
    </Container>
  );
};
