import React, { useEffect, useState } from 'react';
import { BsCalendar4, BsPlusLg } from 'react-icons/bs';

import Flex from '@components/Flex';
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
  Icon,
  Row,
  IconBig,
} from './styles';
import { COLORS } from '@themes/colors';
import SidebarModal from './components/SidebarModal';
import Spacing from '@components/Spacing';
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
  const [openCalendar, setOpenCalendar] = useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1329;
  const { subjects, getAllPlanByDays, cards, loading } = useStudyPlan();
  const [isNewCardModalOpen, setIsNewCardModalOpen] = useState(false);

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
        subjects={subjects}
      />
    </Container>
  );
};
