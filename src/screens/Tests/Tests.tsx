import React from 'react';

import Title from '@components/Title';
import { getColorByTest, getRandomColors } from '@utils/functions';

import Card from './components/Card';
import SelectTestYear from './components/SelectTestYear';
import { Container, WrapperCards } from './styles';

export const Tests: React.FC = () => {
  const data = [
    {
      title: 'CADER. Azul',
      color: 'blue',
      firstDay: {
        test: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2021_PV_reaplicacao_PPL_D1_CD1.pdf',
        result:
          'https://download.inep.gov.br/enem/provas_e_gabaritos/2021_GB_reaplicacao_PPL_D1_CD1.pdf',
      },
      secondDay: {
        test: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2021_PV_reaplicacao_PPL_D1_CD1.pdf',
        result:
          'https://download.inep.gov.br/enem/provas_e_gabaritos/2021_GB_reaplicacao_PPL_D1_CD1.pdf',
      },
    },
    {
      title: 'CADER. Amarelo',
      color: 'yellow',
      firstDay: {
        test: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2021_PV_reaplicacao_PPL_D1_CD1.pdf',
        result:
          'https://download.inep.gov.br/enem/provas_e_gabaritos/2021_GB_reaplicacao_PPL_D1_CD1.pdf',
      },
      secondDay: {
        test: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2021_PV_reaplicacao_PPL_D1_CD1.pdf',
        result:
          'https://download.inep.gov.br/enem/provas_e_gabaritos/2021_GB_reaplicacao_PPL_D1_CD1.pdf',
      },
    },
    {
      title: 'CADER. Branco',
      color: 'white',
      firstDay: {
        test: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2021_PV_reaplicacao_PPL_D1_CD1.pdf',
        result:
          'https://download.inep.gov.br/enem/provas_e_gabaritos/2021_GB_reaplicacao_PPL_D1_CD1.pdf',
      },
      secondDay: {
        test: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2021_PV_reaplicacao_PPL_D1_CD1.pdf',
        result:
          'https://download.inep.gov.br/enem/provas_e_gabaritos/2021_GB_reaplicacao_PPL_D1_CD1.pdf',
      },
    },
    {
      title: 'CADER. Rosa',
      color: 'pink',
      firstDay: {
        test: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2021_PV_reaplicacao_PPL_D1_CD1.pdf',
        result:
          'https://download.inep.gov.br/enem/provas_e_gabaritos/2021_GB_reaplicacao_PPL_D1_CD1.pdf',
      },
      secondDay: {
        test: 'https://download.inep.gov.br/enem/provas_e_gabaritos/2021_PV_reaplicacao_PPL_D1_CD1.pdf',
        result:
          'https://download.inep.gov.br/enem/provas_e_gabaritos/2021_GB_reaplicacao_PPL_D1_CD1.pdf',
      },
    },
  ];
  return (
    <Container>
      <Title
        text="Buscar"
        contrast="provas"
        subText="Selecione o ano abaixo para filtrar"
      />
      <SelectTestYear />
      <WrapperCards>
        {data?.map((elem, index) => (
          <Card
            color={getColorByTest(elem.color)}
            title={elem.title}
            key={index}
            first={elem.firstDay}
            second={elem.secondDay}
          />
        ))}
      </WrapperCards>
    </Container>
  );
};
