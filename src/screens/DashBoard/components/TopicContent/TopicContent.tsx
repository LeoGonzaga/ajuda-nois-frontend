import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import CircleProgress from '@components/CircleProgress';
import Flex from '@components/Flex';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Arrow, Container, Content, Info, Row } from './styles';

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
  return (
    <Container>
      <Text bold>Taxa de Acertos nos Quizzes</Text>
      <Flex direction="row" align="center" justify="center">
        <Row>
          {topics.length > 0 ? (
            <Row>
              <Arrow>
                <IoIosArrowBack />
              </Arrow>

              <Content>
                {topics?.map((topic, index) => {
                  return (
                    <CircleProgress
                      key={index}
                      area={topic}
                      color={
                        quizRates[index] > mediumRate
                          ? COLORS.GREEN
                          : quizRates[index] > lowRate
                          ? COLORS.YELLOW
                          : COLORS.RED
                      }
                      value={quizRates[index]}
                    />
                  );
                })}
              </Content>

              <Arrow>
                <IoIosArrowForward />
              </Arrow>
            </Row>
          ) : (
            <Info>Nenhum quiz cadastrado até o momento!</Info>
          )}
        </Row>
      </Flex>
    </Container>
  );
};
