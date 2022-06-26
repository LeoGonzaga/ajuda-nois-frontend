import React from 'react';
import { BiTrash } from 'react-icons/bi';

import EmptyState from '@components/EmptyState';
import LoadingTable from '@components/LoadingTable';
import { Options, Response, requestAPI } from '@services/index';
import { v4 as uuidv4 } from 'uuid';

import {
  Container,
  Tr,
  Column,
  Th,
  ScrollContainer,
  ButtonsContainer,
} from './styles';

export const Table = ({ data, reload, loading }: any): JSX.Element => {
  const handleRemove = async (id: string) => {
    const token = localStorage.getItem('token');
    const payload: Options = {
      method: 'DELETE',
      url: '/deleteAchievement',
      data: {
        id,
      },
      headers: { Authorization: `Bearer ${token}` },
    };
    const { response }: Response = await requestAPI(payload);
    if (response?.status > 300) {
      return;
    }
    reload();
  };

  return (
    <Container>
      <ScrollContainer>
        <Th>
          <Column></Column>
          <Column>Nome da conquista</Column>
          <Column>Descrição</Column>
          <Column>Experiência</Column>
          <Column></Column>
        </Th>
        {data?.map((element: any) => (
          <Tr key={uuidv4()}>
            <Column>
              <img src={element.icon} width="40px" alt="" />
            </Column>
            <Column>{element.name}</Column>
            <Column>{element.description}</Column>
            <Column>{element.experience} pontos</Column>
            <Column>
              <ButtonsContainer onClick={() => handleRemove(element._id)}>
                <BiTrash size={25} />
              </ButtonsContainer>
            </Column>
          </Tr>
        ))}

        {loading && <LoadingTable />}

        {data?.length === 0 && !loading && (
          <EmptyState text="Não há provas cadastradas até o momento" />
        )}
      </ScrollContainer>
    </Container>
  );
};
