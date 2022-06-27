/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import BackButton from '@components/BackButton';
import EditorContainer from '@components/Editor';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { ROUTES } from 'src/routes/routes';

import {
  Container,
  EditorWrapper,
  Item,
  SideBarSubjects,
  Wrapper,
} from './styles';
import useSubjectContent from './useSubjectContent';

export const SubjectContent = (): JSX.Element => {
  const { data, topics, handleRedirect } = useSubjectContent();
  return (
    <Wrapper>
      <BackButton route={ROUTES.SUBJECT} />

      <Container>
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
        <SideBarSubjects>
          <Text bold size={20}>
            {data?.topic_info?.name}
          </Text>
          <Spacing vertical={5} />
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
        </SideBarSubjects>
      </Container>
    </Wrapper>
  );
};
