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
  console.log(details);
  return (
    <Container>
      <EditorWrapper>
        <EditorContainer showControls={false} data={details.html} />
      </EditorWrapper>
      <SideBarSubjects>
        <Text bold size={20}>
          Eq. de 2º grau
        </Text>
        <Spacing vertical={5} />
        {details &&
          details?.sidebar.map((element: any) => (
            <Link href={`/subject/${element.name}`} key={element.name}>
              <ContentLine>
                <Text>{element.name}</Text>
              </ContentLine>
            </Link>
          ))}
      </SideBarSubjects>
    </Container>
  );
};
