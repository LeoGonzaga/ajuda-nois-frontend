import React, { useState } from 'react';
import { BiTrash } from 'react-icons/bi';

import EmptyState from '@components/EmptyState';
import { Options, Response, requestAPI } from '@services/index';
import { uuid } from 'uuidv4';

import {
  Container,
  Tr,
  Column,
  Th,
  ScrollContainer,
  ButtonsContainer,
} from './styles';

export const Table = ({ data, reload }: any): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleRemoveSubject = async (id: string) => {
    const token = localStorage.getItem('token');
    setLoading(true);
    const payload: Options = {
      method: 'DELETE',
      url: '/deleteTip',
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
    setLoading(false);
  };

  return (
    <Container>
      <ScrollContainer>
        <Th>
          <Column>Tópico</Column>
          <Column>Titúlo</Column>
          <Column>Data de criação</Column>
          <Column></Column>
        </Th>
        {data?.map((element: any) => (
          <Tr key={uuid()}>
            <Column>{element.topic}</Column>
            <Column>{element.date}</Column>
            <Column>{element.content}</Column>
            <Column>
              {!loading && (
                <ButtonsContainer
                  onClick={() => handleRemoveSubject(element._id)}
                >
                  <BiTrash size={25} />
                </ButtonsContainer>
              )}
            </Column>
          </Tr>
        ))}

        {data?.length === 0 && (
          <EmptyState text="Não há matérias cadastradas até o momento" />
        )}
      </ScrollContainer>
    </Container>
  );
};
