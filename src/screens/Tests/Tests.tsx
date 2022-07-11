import React from 'react';

import EmptyState from '@components/EmptyState';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import Title from '@components/Title';
import { getColorByTest, getRandomColors } from '@utils/functions';

import Card from './components/Card';
import SelectTestYear from './components/SelectTestYear';
import { Container, Content, Row, SelectRow, WrapperCards } from './styles';
import useTests from './useTests';

export const Tests = (): JSX.Element => {
  const { data, allYears, setSelectedYear } = useTests();

  return (
    <Container>
      <Title
        text="Buscar"
        contrast="provas"
        subText="Selecione o ano abaixo para filtrar"
      />
      <SelectRow>
        {allYears && (
          <SelectTestYear data={allYears} handleClick={setSelectedYear} />
        )}
      </SelectRow>
      {data?.map((item: any, index) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <Content>
            <Text size={20} bold>
              {item.year}
            </Text>
            <WrapperCards>
              <Row>
                {item?.colors?.map((enem: any) => {
                  if (enem?.days.first) {
                    return (
                      <Card
                        color={getColorByTest(enem.color)}
                        title={enem.title}
                        key={index}
                        test={enem.days?.first}
                        day={1}
                      />
                    );
                  }
                })}
              </Row>

              <Row>
                {item?.colors?.map((enem: any) => {
                  if (enem?.days.second) {
                    return (
                      <Card
                        color={getColorByTest(enem.color)}
                        title={enem.title}
                        key={index}
                        test={enem.days?.second}
                        day={2}
                      />
                    );
                  }
                })}
              </Row>
            </WrapperCards>
          </Content>
        );
      })}

      {data?.length === 0 && (
        <EmptyState text="Sem provas cadastradas nesse ano" />
      )}
    </Container>
  );
};
