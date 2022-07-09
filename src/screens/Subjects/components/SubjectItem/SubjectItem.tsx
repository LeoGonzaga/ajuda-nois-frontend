/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import LoadingTable from '@components/LoadingTable';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';
import { useRouter } from 'next/router';

import { Empty, TableItem, TableItemContent } from './styles';
import useSubjectItem from './useSubjectItem';

export const SubjectItem = ({
  topic,
  check,
  topic_id,
  loading,
}: any): JSX.Element => {
  const router = useRouter();
  const { data, expand, getLessonsByTopic, handleToggle, handleClose } =
    useSubjectItem();

  const handleRedirect = (route: string, id: string) => {
    router.replace(`${route}?id=${id}`);
  };

  const handleRedirectQuiz = (route: string, id: string) => {
    router.replace(`${route}?id=${id}&index=0`);
  };

  useEffect(() => {
    if (expand) getLessonsByTopic(topic_id);
  }, [expand]);

  useEffect(() => {
    handleClose();
  }, [topic]);

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
                      onClick={() => handleRedirect('/view', lesson?._id)}
                      key={index}
                    >
                      <Text>{lesson.title}</Text>
                    </button>
                  );
                })
              );
            })}

          {data?.length > 0 &&
            data?.map((elem: any, index) => {
              return (
                elem?.quizzes?.length > 0 &&
                elem?.quizzes?.map((quiz: any) => {
                  return (
                    <button
                      onClick={() => handleRedirectQuiz('quiz/', quiz?._id)}
                      key={index}
                    >
                      <Text>{quiz.name}</Text>
                    </button>
                  );
                })
              );
            })}

          {data?.length === 0 && loading && <LoadingTable />}
        </TableItemContent>
      )}
    </>
  );
};
