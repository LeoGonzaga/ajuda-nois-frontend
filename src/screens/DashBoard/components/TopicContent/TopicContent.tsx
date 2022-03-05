import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';
import CircleProgress from '@components/CircleProgress';
import Flex from '@components/Flex';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container, Info, Row } from './styles';

type Props = {
  topics: Array<string>;
  quizRates: Array<number>;
  lowRate: number;
  mediumRate: number;
};

export const TopicContent = ({
  topics,
  quizRates,
  lowRate,
  mediumRate,
}: Props): JSX.Element => {
  const properties = {
    autoplay: false,
    indicators: false,
    transitionDuration: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: (
      <IoIosArrowBack size={30} color={COLORS.TEXT} className="arrow" />
    ),
    nextArrow: (
      <IoIosArrowForward size={30} color={COLORS.TEXT} className="arrow" />
    ),
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Text bold>Taxa de Acertos nos Quizzes</Text>
      <Flex direction="row" align="center" justify="center">
        <Row>
          {topics.length > 0 ? (
            <Slide {...properties}>
              {topics?.map((_topic, index) => {
                return (
                  <div className="each-slide" key={index}>
                    <CircleProgress
                      area={topics[index]}
                      color={
                        quizRates[index] > mediumRate
                          ? COLORS.GREEN
                          : quizRates[index] > lowRate
                          ? COLORS.YELLOW
                          : COLORS.RED
                      }
                      value={quizRates[index]}
                    />
                  </div>
                );
              })}
            </Slide>
          ) : (
            <Info>Nenhum quiz cadastrado até o momento!</Info>
          )}
        </Row>
      </Flex>
    </Container>
  );
};
