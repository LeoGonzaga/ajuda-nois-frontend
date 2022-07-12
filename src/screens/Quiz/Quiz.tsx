/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react';

import BackButton from '@components/BackButton';
import EditorContainer from '@components/Editor';
import Flex from '@components/Flex';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { ROUTES } from 'src/routes/routes';

import {
  Container,
  EditorWrapper,
  Expand,
  InputsContainer,
  Item,
  ScrollSideBar,
  SideBarSubjects,
  SideBarSubjectsExpand,
  Wrapper,
} from './styles';
import useQuiz from './useQuiz';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';

export const Quiz = (): JSX.Element => {
  const {
    data,
    handleRedirectToIndex,
    index,
    questions,
    handleCheck,
    awnsers,
  } = useQuiz();

  const [open, setOpen] = useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1329;

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  return (
    <Wrapper>
      <Flex align="center">
        <BackButton route={ROUTES.SUBJECT} />
        {data?.name}
      </Flex>
      <Container>
        <div>
          <EditorWrapper active={open}>
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
          <InputsContainer active={open}>
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
        {width <= breakpoint ? (
          <SideBarSubjectsExpand active={open}>
            <Expand onClick={() => setOpen(!open)}>
              <Text bold size={20}>
                {data?.topic_info?.name}
              </Text>
              {open ? <GoTriangleDown size={20} /> : <GoTriangleUp size={20} />}
            </Expand>
            <Spacing vertical={5} />
            <ScrollSideBar>
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
            </ScrollSideBar>
          </SideBarSubjectsExpand>
        ) : (
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
        )}
      </Container>
    </Wrapper>
  );
};
