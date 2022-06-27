/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import Text from '@components/Text';
import { COLORS } from '@themes/colors';
import { useRouter } from 'next/router';

import { Empty, TableItem, TableItemContent } from './styles';
import useSubjectItem from './useSubjectItem';

export const SubjectItem = ({ topic, check, topic_id }: any): JSX.Element => {
  const router = useRouter();
  const { data, expand, getLessonsByTopic, handleToggle } = useSubjectItem();

  const handleRedirect = (id: string) => {
    router.replace('/view?id=' + id);
  };

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
                <Empty>Não há lições cadastradas por enquanto.</Empty>
              ) : (
                elem?.lessons?.map((lesson: any) => {
                  return (
                    <button
                      onClick={() => handleRedirect(lesson?._id)}
                      key={index}
                    >
                      <Text>{lesson.title}</Text>
                    </button>
                  );
                })
              );
            })}
        </TableItemContent>
      )}
    </>
  );
};
