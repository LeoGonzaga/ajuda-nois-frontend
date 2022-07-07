/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import BackButton from '@components/BackButton';
import EditorContainer from '@components/Editor';
import Flex from '@components/Flex';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { ROUTES } from 'src/routes/routes';

import { Container, EditorWrapper, Wrapper } from './styles';
import useQuiz from './useQuiz';

export const Quiz = (): JSX.Element => {
  const { data } = useQuiz();
  const index = 0;
  return (
    <Wrapper>
      <Flex align="center">
        <BackButton route={ROUTES.SUBJECT} />
        {data?.name}
      </Flex>
      <Container>
        <EditorWrapper>
          {data?._id && (
            <EditorContainer
              showControls={false}
              data={data.questions_info[0].question}
              onChange={() => {}}
              height="100%"
              width="100%"
              hide
            />
          )}
        </EditorWrapper>
      </Container>
    </Wrapper>
  );
};
