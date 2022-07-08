/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import BackButton from '@components/BackButton';
import EditorContainer from '@components/Editor';
import Flex from '@components/Flex';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { ROUTES } from 'src/routes/routes';

import {
  Container,
  EditorWrapper,
  InputsContainer,
  Item,
  SideBarSubjects,
  Wrapper,
} from './styles';
import useQuiz from './useQuiz';

export const Quiz = (): JSX.Element => {
  const {
    data,
    handleRedirectToIndex,
    index,
    questions,
    handleCheck,
    awnsers,
  } = useQuiz();

  return (
    <Wrapper>
      <Flex align="center">
        <BackButton route={ROUTES.SUBJECT} />
        {data?.name}
      </Flex>
      <Container>
        <div>
          <EditorWrapper>
            {data?._id && (
              <EditorContainer
                showControls={false}
                data={questions[index]?.question}
                onChange={() => {}}
                height="60%"
                width="100%"
                hide
              />
            )}
          </EditorWrapper>
          <InputsContainer>
            <div>
              <Text>Selecione a opção correta abaixo:</Text>
              {questions[index]?.alternatives?.map(
                (alternative: any, index: any) => (
                  <label
                    key={index}
                    onClick={() => handleCheck(index, alternative)}
                  >
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={awnsers[index].check}
                    />
                    <p>{alternative}</p>
                  </label>
                )
              )}
            </div>
          </InputsContainer>
        </div>
        <SideBarSubjects>
          <Text bold size={20}>
            {data?.topic_info?.name}
          </Text>
          <Spacing vertical={5} />
          {data &&
            data?.questions_info?.map((element: any, current: any) => (
              <Item
                active={questions[index]?.name === element.name}
                onClick={() => handleRedirectToIndex(data?._id, current)}
                key={current}
              >
                <p>{element.name}</p>
              </Item>
            ))}
        </SideBarSubjects>
      </Container>
    </Wrapper>
  );
};
