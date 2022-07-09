/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import BackButton from '@components/BackButton';
import EditorContainer from '@components/Editor';
import Flex from '@components/Flex';
import LoadingTable from '@components/LoadingTable';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { ROUTES } from 'src/routes/routes';

import Pomodoro from '../Pomodoro';
import {
  Container,
  EditorWrapper,
  Item,
  SideBarSubjects,
  Wrapper,
  ScrollSideBar,
} from './styles';
import useSubjectContent from './useSubjectContent';

export const SubjectContent = (): JSX.Element => {
  const { data, topics, handleRedirect, loading, area } = useSubjectContent();

  return (
    <Wrapper>
      <Flex align="center">
        <BackButton route={ROUTES.SUBJECT} />
        {data?.title}
      </Flex>
      <Container>
        {loading ? (
          <LoadingTable />
        ) : (
          <EditorWrapper>
            {data?._id && (
              <EditorContainer
                showControls={false}
                data={data.content}
                onChange={() => {}}
                height="100%"
                width="100%"
                hide
              />
            )}
          </EditorWrapper>
        )}

        <SideBarSubjects>
          <Text bold size={20}>
            {data?.topic_info?.name}
          </Text>
          <Spacing vertical={5} />
          <ScrollSideBar>
            {topics &&
              topics?.map((element: any, index) => (
                <Item
                  active={element.title === data?.title}
                  onClick={() => handleRedirect(element?._id)}
                  key={index}
                >
                  <p>{element.title}</p>
                </Item>
              ))}
          </ScrollSideBar>
          <Pomodoro area={area} />
        </SideBarSubjects>
      </Container>
    </Wrapper>
  );
};
