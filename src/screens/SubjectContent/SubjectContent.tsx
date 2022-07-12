/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react';

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
  Title,
  Row,
  SideBarSubjectsExpand,
  Expand,
} from './styles';
import useSubjectContent from './useSubjectContent';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';

export const SubjectContent = (): JSX.Element => {
  const { data, topics, handleRedirect, loading, area } = useSubjectContent();
  const [open, setOpen] = useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1329;

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  return (
    <Wrapper>
      <Row>
        <BackButton route={ROUTES.SUBJECT} />
        <Title>{data?.title}</Title>
      </Row>
      <Container>
        {loading ? (
          <LoadingTable />
        ) : (
          <>
            <EditorWrapper active={open}>
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
            {width <= breakpoint ? (
              <SideBarSubjectsExpand active={open}>
                <Expand onClick={() => setOpen(!open)}>
                  <Text bold size={20}>
                    {data?.topic_info?.name ? data?.topic_info?.name : 'Aulas'}
                  </Text>
                  {open ? (
                    <GoTriangleDown size={20} />
                  ) : (
                    <GoTriangleUp size={20} />
                  )}
                </Expand>
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
              </SideBarSubjectsExpand>
            ) : (
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
            )}
          </>
        )}
      </Container>
    </Wrapper>
  );
};
