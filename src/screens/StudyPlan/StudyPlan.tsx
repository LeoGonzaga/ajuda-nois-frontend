import React, { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';

import LoadingTable from '@components/LoadingTable';
import Text from '@components/Text';
import Title from '@components/Title';
import { Options, Response, requestAPI } from '@services/index';
import { checkError } from '@utils/functions';

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
  begin: string;
  end: string;
  subject: string;
  topic: string;
  text?: string;
  date: string;
};

export const StudyPlan = (): JSX.Element => {
  const { subjects, getAllPlanByDays, cards, loading } = useStudyPlan();
  const [isNewCardModalOpen, setIsNewCardModalOpen] = useState(false);

  function handleOpenNewCardModal() {
    setIsNewCardModalOpen(true);
  }

  function handleCloseNewCardModal() {
    setIsNewCardModalOpen(false);
  }

  const handleNewCard = async (data: CardProps) => {
    const token = localStorage.getItem('token');

    const payload: Options = {
      method: 'POST',
      url: '/createStudyPlan',
      data: {
        studies: [
          {
            subject_id: data?.subject,
            topic_id: data?.topic,
            begin: data?.begin,
            end: data?.end,
            description: data?.text,
            status: 'planned',
          },
        ],
        date: data?.date,
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
                status={'idle'}
                startTime={card?.studies[0]?.begin}
                endTime={card?.studies[0]?.end}
                subject={card?.studies[0]?.subject_info?.name}
                topic={card?.studies[0]?.topic_info?.name}
                text={card?.studies[0]?.description}
                id={card?._id}
                reload={getAllPlanByDays}
              />
            ))}
            {cards?.length === 0 && loading && <LoadingTable />}
            {cards?.length === 0 && !loading && (
              <Text>Você ainda não cadastrou nada por aqui :)</Text>
            )}
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
