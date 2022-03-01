import React, { useCallback, useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import Text from '@components/Text';
import { COLORS } from '@themes/colors';
import Link from 'next/link';

import { ContentLine, TableItem, TableItemContent } from './styles';

export const SubjectItem = (): JSX.Element => {
  const [expand, setExpand] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setExpand(!expand);
  }, [expand]);

  return (
    <>
      <TableItem onClick={handleToggle}>
        <Text>Equação do 1º Grau</Text>
        <BsFillCheckCircleFill color={COLORS.SECONDARY} />
      </TableItem>
      {expand && (
        <TableItemContent>
          <Link href="/subject/math">
            <ContentLine>
              <Text>Função</Text>
            </ContentLine>
          </Link>
          <ContentLine>
            <Text>Função</Text>
          </ContentLine>
          <ContentLine>
            <Text>Função</Text>
          </ContentLine>
        </TableItemContent>
      )}
    </>
  );
};
