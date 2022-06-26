import React from 'react';

import Spacing from '@components/Spacing';
import Text from '@components/Text';
import Title from '@components/Title';
import { getColorByTest, getRandomColors } from '@utils/functions';

import Card from './components/Card';
import SelectTestYear from './components/SelectTestYear';
import { Container, WrapperCards } from './styles';
import useTests from './useTests';

export const Tests = (): JSX.Element => {
  const { data } = useTests();

  return (
    <Container>
      <Title
        text="Buscar"
        contrast="provas"
        subText="Selecione o ano abaixo para filtrar"
      />
      <SelectTestYear />
      {data?.map((item: any, index) => {
        return (
          <>
            <WrapperCards>
              <Text size={20} bold>
                {item.year}
              </Text>
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
            </WrapperCards>
          </>
        );
      })}
    </Container>
  );
};
