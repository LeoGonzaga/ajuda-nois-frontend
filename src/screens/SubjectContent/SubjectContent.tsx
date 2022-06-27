/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import EditorContainer from '@components/Editor';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import Link from 'next/link';

import {
  Container,
  ContentLine,
  EditorWrapper,
  SideBarSubjects,
} from './styles';

export const SubjectContent = ({ details }: any): JSX.Element => {
  return (
    <Container>
      <EditorWrapper>
        <EditorContainer
          showControls={false}
          data={details.content}
          onChange={() => {}}
        />
      </EditorWrapper>
      <SideBarSubjects>
        <Text bold size={20}>
          {details?.topic_id}
        </Text>
        <Spacing vertical={5} />
        {/* {details &&
          details?.sidebar.map((element: any) => (
            <Link href={`/subject/${element.name}`} key={element.name}>
              <ContentLine>
                <Text>{element.name}</Text>
              </ContentLine>
            </Link>
          ))} */}
      </SideBarSubjects>
    </Container>
  );
};
