import React, { useCallback, useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import Text from '@components/Text';
import { COLORS } from '@themes/colors';
import Link from 'next/link';

import { ContentLine, TableItem, TableItemContent } from './styles';

export const SubjectItem = ({ topic, check }: any): JSX.Element => {
  const [expand, setExpand] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setExpand(!expand);
  }, [expand]);

  return (
    <>
      <TableItem onClick={handleToggle}>
        <Text>{topic}</Text>
        {check && <BsFillCheckCircleFill color={COLORS.SECONDARY} />}
      </TableItem>
      {expand && (
        <TableItemContent>
          <Link href="/subject/math">
            <ContentLine>
              <Text>Exemplo 1</Text>
            </ContentLine>
          </Link>
          <ContentLine>
            <Text>Exemplo 2</Text>
          </ContentLine>
          <ContentLine>
            <Text>Exemplo 3</Text>
          </ContentLine>
        </TableItemContent>
      )}
    </>
  );
};
