/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import Text from '@components/Text';
import { COLORS } from '@themes/colors';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ContentLine, TableItem, TableItemContent } from './styles';
import useSubjectItem from './useSubjectItem';

export const SubjectItem = ({ topic, check, topic_id }: any): JSX.Element => {
  const router = useRouter();
  const { data, expand, getLessonsByTopic, handleToggle } = useSubjectItem();

  useEffect(() => {
    if (expand) getLessonsByTopic(topic_id);
  }, [expand]);

  return (
    <>
      <TableItem onClick={handleToggle}>
        <Text>{topic}</Text>
        {check && <BsFillCheckCircleFill color={COLORS.SECONDARY} />}
      </TableItem>
      {expand && (
        <TableItemContent>
          {data?.length > 0 &&
            data?.map((elem: any, index) => {
              return elem?.lessons?.length === 0 ? (
                <p>nao há</p>
              ) : (
                elem?.lessons?.map((lesson: any) => {
                  return (
                    <Link
                      href={{
                        pathname: '/view/[id]',
                        query: { id: lesson?._id },
                      }}
                      key={index}
                    >
                      <ContentLine>
                        <Text>{lesson.title}</Text>
                      </ContentLine>
                    </Link>
                  );
                })
              );
            })}
        </TableItemContent>
      )}
    </>
  );
};
